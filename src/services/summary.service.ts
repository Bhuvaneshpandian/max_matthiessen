import { Injectable } from '@angular/core';
import { ChartOptionService } from './chart-option.service';
import { DataPoints } from 'src/model/DataPoints.model';



const colors: string[]  = ['#0099FF', '#A8B400', '#9C1AA0',"#EB9700","#00B0CA"];
const dataPoints: DataPoints[] = [
  { y: 60, name: "Pensions",color: "#0099FF" },
  { y: 15, name: "Insurances",color:"#A8B400"},
  { y: 23, name: "Cash",color:"#9C1AA0"},
  { y: 12, name: "Real estate",color:"#EB9700" },
  { y: 12, name: "Equity",color:"#00B0CA" }
]

@Injectable({
  providedIn: 'root'
})


export class SummaryService {
  constructor(private chartOptionService:ChartOptionService) {}

  getSummaryChatData():any{
      return{
      animationEnabled: false,
      backgroundColor: "rgba(0, 0, 0, 0)",
      data:[{
        type: "doughnut",
        yValueFormatString: "#,###.##'%'",
        colors:colors,
        dataPoints:dataPoints
      }]
    }
  }
}


