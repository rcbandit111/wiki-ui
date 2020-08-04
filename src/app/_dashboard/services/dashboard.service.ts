import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.develop";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<string[]> {
    return this.httpClient.get<string[]>(environment.api.urls.dashboard.dataPage);
  }
}
