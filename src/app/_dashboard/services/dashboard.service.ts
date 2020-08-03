import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://185.185.126.15:8080/engine/data/page');
  }
}
