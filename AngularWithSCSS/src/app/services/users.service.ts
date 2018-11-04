import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly rootUrl = 'http://www.angularservices.somee.com';
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

  getUsers(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(this.rootUrl + '/api/User')
      .pipe(catchError(this.handleError));
  }

}
