import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Authorize } from '../models/backend/authorize';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', name);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    formData.append('scope', 'read');
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(name)}`,
      Username: name,
      Password: password,
      'Content-Type': 'multipart/form-data',
    });
    // TODO: noamb - move base url - 185.185.126.15:8089 - to environment
    // TODO: noamb - wrap httpClient in a base service - getting the url desired, returning known response model
    return this.httpClient
      .post(`http://185.185.126.15:8080/engine/oauth/token`, formData, {
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
