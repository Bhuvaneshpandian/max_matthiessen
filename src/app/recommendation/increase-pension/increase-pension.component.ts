import { Component, OnInit } from '@angular/core';
import { PensionChartModel } from 'src/model/PensionChart.model';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-increase-pension',
  templateUrl: './increase-pension.component.html',
  styleUrls: ['./increase-pension.component.css'],
})
export class IncreasePensionComponent implements OnInit {
  range: any = 7;

  pensionData: PensionChartModel = {
    monthlyPensionAmt: 0,
    totalPensionAmount: 0,
    Recommended: 0,
    chartOptions: {},
  };

  canShowSpinner:boolean = false;

  constructor(private pensionService: PensionReccomSchemeService) { }

  ngOnInit(): void {
    this.pensionService.setPensionInfo()
    this.fetchPensionData();
  }

  fetchPensionData() {
    this.canShowSpinner = true
    this.pensionService.getPensionData().subscribe({
      next: (pensionData) => {
        this.pensionData = pensionData;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.canShowSpinner = false
      },
    });
  }

  isDisable() {
    if (this.range != 7) {
      return false;
    }
    return true;
  }

  onRangeChange() {
    this.canShowSpinner = true
    this.pensionService.updatePensionData(this.pensionData).subscribe({
      next:(pesnionInfo)=>{
        this.pensionService.setPensionInfo()
      },
      error:(error)=>{
        console.log(error);

      },
      complete:()=>{
        this.canShowSpinner = false

        this.pensionService.setPopScreenInfo({
          recomSrc: false,
          pension: false,
          popup: true,
        });
      }
    })
  }

  onInputRange() {
    let number = this.pensionData.monthlyPensionAmt;
    let increment = number * (this.range / 100);
    let result = number + increment;
    this.pensionData.monthlyPensionAmt = Math.round(result);
    this.pensionData.Recommended = Math.round(this.pensionData.Recommended + result);
  }
}
