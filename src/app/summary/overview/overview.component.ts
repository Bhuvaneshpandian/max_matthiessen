import { Component } from '@angular/core';

import { Chart,registerables  } from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor() {
    Chart.register(...registerables); // Register all necessary Chart.js components
  }

  ngOnInit(): void {
    this.createChart();
  }

  chart={}

  chartOptions = {
	  animationEnabled: false,
    backgroundColor: "rgba(0, 0, 0, 0)",

	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
     colors : ['#0099FF', '#A8B400', '#9C1AA0',"#EB9700","#00B0CA"],
		dataPoints: [
		  { y: 60, name: "Pensions",color: "#0099FF" },
		  { y: 15, name: "Insurances",color:"#A8B400"},
		  { y: 23, name: "Cash",color:"#9C1AA0"},
		  { y: 12, name: "Real estate",color:"#EB9700" },
      { y: 12, name: "Equity",color:"#00B0CA" }
		]
	  }]
	}


  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['2021', '2023',  '2023', '2024'],
        datasets: [
          {
            label: 'Stocks',
            data: [10, 20, 30.5],
            backgroundColor: 'rgba(0, 123, 255, 0.3)',
            borderColor: 'rgba(0, 123, 255, 1)',
            fill: true,
          },
          {
            label: 'Bonds',
            data: [5, 10, 15.3],
            backgroundColor: 'rgba(40, 167, 69, 0.3)',
            borderColor: 'rgba(40, 167, 69, 1)',
            fill: true,
          },
          {
            label: 'Real Estate',
            data: [40, 60, 89.8],
            backgroundColor: 'rgba(23, 162, 184, 0.3)',
            borderColor: 'rgba(23, 162, 184, 1)',
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 2.5,
        plugins: {
          legend: {
            display: false,
            position: 'top'
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Year'
            }
          },
          y: {
            title: {
              display: false,
              text: 'Value (in thousands)'
            },
            beginAtZero: true
          }
        }
      }
    });
  }


}
