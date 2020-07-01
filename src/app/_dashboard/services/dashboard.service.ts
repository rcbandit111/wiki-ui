import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getPageData(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://185.185.126.15:8080/engine/data/page');
  }
}
