import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../interfaces/iuser';
import { IAccesData } from '../interfaces/iacces-data';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://example.com/api/comments';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(accessData: IAccesData): Observable<IUser> {
    return this.http.post<IUser>('/api/login', accessData, { headers: this.headers })
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            return throwError(() => new Error('Invalid credentials. Please try again.'));
          } else if (error.status === 500) {
            return throwError(() => new Error('A server error occurred. Please try again late.'));
          } else {
            return throwError(() => new Error('An unexpected error occurred. Please try again'));
          }
        })
      );
  }
}
