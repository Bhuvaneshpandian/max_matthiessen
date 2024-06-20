import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/model/Dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  fetchDashboard():Observable<Dashboard[]> {
    return  this.http.get<Dashboard[]>(
      `${environment.url}/dashboardContent`
    );

  }
}
