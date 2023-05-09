import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IProjectData } from '../interfaces/iproject-data';
import { IStepOneData } from '../interfaces/istep-one-data';
import { IStepTwoData } from '../interfaces/istep-two-data';
import { ICreateProjectResponse } from '../interfaces/icreate-project-response';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {
  private apiUrl = 'https://example.com/api/comments';
  private projectData = new BehaviorSubject<IProjectData>({
    title: '',
    description: '',
    category: { name: '' },
    goal: 0,
    endDate: new Date(),
    imageUrl: '',
  });

   isStepValid:boolean = false;

  constructor(private http: HttpClient) {}

  public setStepValid() {
    this.isStepValid = true;
  }

  getProjectData(): Observable<IProjectData> {
    return this.projectData.asObservable();
  }

  updateStepOneData(data: IStepOneData): void {
    const updatedData = { ...this.projectData.value, ...data };
    this.projectData.next(updatedData);
  }

  updateStepTwoData(data: IStepTwoData): void {
    const updatedData = { ...this.projectData.value, ...data };
    this.projectData.next(updatedData);
  }

  createProject(): Observable<IProjectData> {
    const projectData = this.projectData.value;
    return this.http
      .post<ICreateProjectResponse>(`${this.apiUrl}/create-project/step-3`, projectData)
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      );
  }
}
