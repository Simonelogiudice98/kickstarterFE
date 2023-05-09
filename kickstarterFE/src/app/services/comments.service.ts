import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/icomment';
import { Observable, catchError, of, throwError, throwIfEmpty } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  // backend api url
  private apiUrl = 'https://example.com/api/comments';

  constructor(private http:HttpClient) { }

  // get comments
  getCommentsForProject(projectId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}?projectId=${projectId}`)
      .pipe(
        catchError(error => {
          console.error(error);
          return of([]);
        }),
        throwIfEmpty()
      );
  }
  
  // add comment
  postComment(comment:IComment): Observable<IComment> {
    return this.http.post<IComment>(`${this.apiUrl}/post`, comment)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        }),
        throwIfEmpty()
      );
  }

}




