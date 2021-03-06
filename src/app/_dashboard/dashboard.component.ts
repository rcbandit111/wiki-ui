import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: string[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe(data => this.data = data);
  }

}
