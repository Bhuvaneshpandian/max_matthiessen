import { Injectable } from '@angular/core';
import { ChartOptionService } from './chart-option.service';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/model/News.model';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { UpcommingPayment } from 'src/model/UpcommingPayments.model';


@Injectable({
  providedIn: 'root'
})


export class SummaryService {
  constructor(private chartOptionService: ChartOptionService, private http: HttpClient) { }

  getSummaryChatData(): any {
    return {
      animationEnabled: false,
      backgroundColor: "rgba(0, 0, 0, 0)",
      data: [{
        type: "doughnut",
        yValueFormatString: "#,###.##'%'",
        colors: ['#0099FF', '#A8B400', '#9C1AA0', "#EB9700", "#00B0CA"],
        dataPoints: [
          { y: 60, name: "Pensions", color: "#0099FF" },
          { y: 15, name: "Insurances", color: "#A8B400" },
          { y: 23, name: "Cash", color: "#9C1AA0" },
          { y: 12, name: "Real estate", color: "#EB9700" },
          { y: 12, name: "Equity", color: "#00B0CA" }
        ]
      }]
    }
  }

  getNewsData(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.url}/news`)
  }

  getUpcommingPayments():Observable<UpcommingPayment[]>{
    return this.http.get<UpcommingPayment[]>(`${environment.url}/upcommingPayments`)
  }
}


