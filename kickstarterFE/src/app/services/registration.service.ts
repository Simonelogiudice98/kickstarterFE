import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { Observable, catchError, throwError, throwIfEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // backend api url
  private apiUrl = 'https://example.com/api/comments';

  private newUser:IUser = {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    isCreator: true
  }

  constructor(private http: HttpClient) { }

  saveUser(user:IUser){
    this.newUser.firstName = user.firstName;
    this.newUser.lastName = user.lastName;
    this.newUser.email = user.email;user
    this.newUser.password = user.password;
  }

  createUser(user:IUser): Observable<IUser> {
    this.saveUser(user);
    return this.http.post<IUser>(`${this.apiUrl}/register`, this.newUser)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(() => error);
        }),
        throwIfEmpty()
      );
  }
}

