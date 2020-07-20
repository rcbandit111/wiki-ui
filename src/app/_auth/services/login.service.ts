import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Authorize } from '../models/backend/authorize';

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
    // TODO: noamb - move base url - 185.185.126.15:8089 - to environment
    // TODO: noamb - wrap httpClient in a base service - getting the url desired, returning known response model
    return this.httpClient
      .post(`http://185.185.126.15:8080/engine/oauth/token`, body.toString(), {
        headers,
        withCredentials: true,
      })
      .pipe(
        map((response: Authorize) => {
          sessionStorage.setItem('token', response.accessToken);
          return true;
        })
      );
  }
}
