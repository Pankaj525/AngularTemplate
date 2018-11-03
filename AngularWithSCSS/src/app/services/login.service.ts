import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginResponseModel } from '../models/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error:', errorResponse.error.message);
    }
    else {
      console.error('Server side error:', errorResponse);
    }

    return throwError('There is a problem with service. We are notified and working on it. Please try again later.');
  }
  userLogin(loginModel: Login): Observable<LoginResponseModel> {
    return this.httpClient.post<LoginResponseModel>('http://www.angularservices.somee.com/api/UserLogin', loginModel, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
}
