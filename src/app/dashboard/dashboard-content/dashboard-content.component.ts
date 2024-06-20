import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { Dashboard } from 'src/model/Dashboard.model';
import { DashboardService } from 'src/services/dashboard.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  @Output() onRowClick = new EventEmitter<void>();
  canShowLoader: boolean = false

  dashboardContent: any[] = [];
  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {
    this.fetchDashboardContent()
  }

  fetchDashboardContent() {
    this.canShowLoader = true;
    this.dashboardService.fetchDashboard().subscribe({
      next: (content) => {
        this.dashboardContent = content;
      },
      error: (error) => {
        console.error('Error fetching dashboard content:', error);
        this.dashboardContent = [];
      },
      complete: () => {
        this.canShowLoader = false;
      }
    });
  }

  onContentClick() {
    this.onRowClick.emit()
  }


}
