import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent  {
  canIncreasePension: boolean = false;
  chart: any;
  succuss:boolean =false;

  @Output() recommendationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitRecommendationChange() {
    this.recommendationChange.emit(false);
  }



  range: any = 7;


  chartOptions = {
	  animationEnabled: false,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zoomEnabled:false,
	  data: [{

		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
     colors : ['#ff6347', '#4682b4', '#32cd32'],
		dataPoints: [
		  { y: 28, name: "Pensions", color:"#D3D3D3" },
		  { y: 20, name: "Insurances" , color:"#0099FF" },
		  { y: 15, name: "License",  color:"#D3D3D3"},
		  { y: 23, name: "Cash", color:"#D3D3D3" },
		  { y: 12, name: "Real estate", color:"#D3D3D3" },
      { y: 12, name: "Equity", color:"#D3D3D3" }
		]
	  }]
	}

  onclick() {
    this.canIncreasePension = true;
  }


  applyClick(){
    this.canIncreasePension = false;

  }


  onBackClik() {
    this.canIncreasePension = false;
    this.emitRecommendationChange();
  }
}
