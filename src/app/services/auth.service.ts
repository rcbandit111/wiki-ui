import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authenticate(username, password) {
    // TODO: noamb - get root api path from environment
    return this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
