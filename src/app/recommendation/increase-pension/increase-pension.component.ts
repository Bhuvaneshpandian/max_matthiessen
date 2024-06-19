import { Component } from '@angular/core';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';


@Component({
  selector: 'app-increase-pension',
  templateUrl: './increase-pension.component.html',
  styleUrls: ['./increase-pension.component.css']
})
export class IncreasePensionComponent {
  range: any = 7;

  chartOptions = {
    animationEnabled: false,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zoomEnabled: false,
    data: [{

      type: "doughnut",
      yValueFormatString: "#,###.##'%'",
      colors: ['#ff6347', '#4682b4', '#32cd32'],
      dataPoints: [
        { y: 28, name: "Pensions", color: "#D3D3D3" },
        { y: 20, name: "Insurances", color: "#0099FF" },
        { y: 15, name: "License", color: "#D3D3D3" },
        { y: 23, name: "Cash", color: "#D3D3D3" },
        { y: 12, name: "Real estate", color: "#D3D3D3" },
        { y: 12, name: "Equity", color: "#D3D3D3" }
      ]
    }]
  }

  constructor(private pensionService: PensionReccomSchemeService) { }
  isDisable() {
    if (this.range != 7) {
      return false
    }
    return true
  }

  onRangeChange() {
    this.pensionService.setPopScreenInfo({ recomSrc: false, pension: false, popup: true })
  }
}
