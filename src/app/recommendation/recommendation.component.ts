import { Component, EventEmitter, Output, AfterViewInit, Input, OnInit } from '@angular/core';
import { PensionSchemeScreen } from 'src/model/Pension.model';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  chart: any;
  succuss: boolean = false;


  @Input() showRecScreenInfo: PensionSchemeScreen | undefined;

  constructor(private recScreenService: PensionReccomSchemeService) {
  }

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

  onBackClick() {
    const screenInfo = this.showRecScreenInfo;
    if (screenInfo?.recomSrc) {
      this.recScreenService.setPopScreenInfo({ recomSrc: false, popup: false, pension: false })
    }
    if (screenInfo?.pension) {
      this.recScreenService.setPopScreenInfo({ recomSrc: true, popup: false, pension: false })
    }
  }

  onSideClik() {
    this.recScreenService.setPopScreenInfo({ recomSrc: false, popup: false, pension: false })
  }

  onRangeChange() {
  }
  canDisable(): boolean {
    if (this.range != 7) {
      return false
    }
    return true
  }

  onCancelClick() {
    this.recScreenService.setPopScreenInfo({ recomSrc: false, popup: false, pension: false })

  }
}
