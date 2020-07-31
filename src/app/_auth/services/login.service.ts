import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Authorize } from '../models/backend/authorize';
import {environment} from "../../../environments/environment.develop";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    const body = new HttpParams()
    .set('username', name)
    .set('password', password)
    .set('grant_type', 'password')
    .set('scope', 'read');
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${name}:${password}`)}`,
      username: name,
      password,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    // TODO: noamb - wrap httpClient in a base service - getting the url desired, returning known response model
    return this.httpClient
      .post(environment.api.urls.auth.token , body.toString(), {
        headers,
        withCredentials: true,
      })
      .pipe(
        map((response: Authorize) => {
          sessionStorage.setItem('access_token', response.access_token);
          sessionStorage.setItem('refresh_token', response.refresh_token);
          return true;
        })
      );
  }
}
