import { Component } from '@angular/core';

@Component({
  selector: 'app-increase-pension',
  templateUrl: './increase-pension.component.html',
  styleUrls: ['./increase-pension.component.css']
})
export class IncreasePensionComponent {
  chartOptions = {
	  animationEnabled: false,
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
     colors : ['#ff6347', '#4682b4', '#32cd32'],
		dataPoints: [
		  { y: 28, name: "Pensions" },
		  { y: 20, name: "Insurances" },
		  { y: 15, name: "License" },
		  { y: 23, name: "Cash" },
		  { y: 12, name: "Real estate" },
      { y: 12, name: "Equity" }
		]
	  }]
	}
}
