import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    // TODO: noamb - move base url - 185.185.126.15:8089 - to environment
    // TODO: noamb - wrap httpClient in a base service - getting the url desired, returning known response model
    return this.httpClient.post(`http://185.185.126.15:8089/engine/users/authorize`, {
      user,
      password
    });
  }
}
