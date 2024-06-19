import { Injectable } from '@angular/core';
import { DataPoints } from 'src/model/DataPoints.model';

@Injectable({
  providedIn: 'root'
})
export class ChartOptionService {

  constructor() { }

  getChartDate(colors:string[],dataPoints:DataPoints[]){
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
