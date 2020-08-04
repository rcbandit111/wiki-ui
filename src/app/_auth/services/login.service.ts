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

  // https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type#what-is-an-oauth-20-grant-type

  authCodeRequest(name: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('client_id', 'admin')
      .set('redirect_uri', 'http://localhost:9000/callback')
      .set('response_type', 'code')
      .set('scope', 'read_profile');

    let options = { params: params };

    return this.httpClient
      .get(environment.api.urls.auth.authorize, options)
      .pipe(
        map((response: Response) => {
          console.log(response)

          // TODO - get response from http link after return code 302
          // https://stackoverflow.com/questions/36885556/angular2-watch-for-302-redirect-when-fetching-resource
          // http://localhost:9000/callback?code=7CLwgh
        })
      );
  }

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
