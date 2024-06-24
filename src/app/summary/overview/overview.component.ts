import { Component } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { SummaryService } from 'src/services/summary.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  chart = {}
  chartOptions = {}

  constructor(private summaryService: SummaryService) {
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chartOptions = this.summaryService.getSummaryChatData()
  }

}
