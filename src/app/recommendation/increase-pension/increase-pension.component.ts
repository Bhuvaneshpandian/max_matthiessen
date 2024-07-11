import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PensionChartModel } from 'src/model/PensionChart.model';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-increase-pension',
  templateUrl: './increase-pension.component.html',
  styleUrls: ['./increase-pension.component.css'],
})
export class IncreasePensionComponent implements OnInit,OnChanges {
  isDisable: boolean = true;

  pensionData: PensionChartModel = {
    monthlyPensionAmt: 0,
    totalPensionAmount: 0,
    Recommended: 0,
    chartOptions: {},
    range:0
  };

  canShowSpinner:boolean = false;

  constructor(private pensionService: PensionReccomSchemeService) { }

  ngOnInit(): void {
    this.pensionService.setPensionInfo()
    this.fetchPensionData();
    console.log("bhuvbanesh")

  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes)

  }

  fetchPensionData() {
    this.canShowSpinner = true
    this.pensionService.getPensionData().subscribe({
      next: (pensionData:PensionChartModel[]) => {
        this.pensionData = pensionData[0];
      },
      error: (error) => {
        throw Error (error.message)
      },
      complete: () => {
        this.canShowSpinner = false
      },
    });
  }



  onRangeChange() {
    this.canShowSpinner = true
    this.pensionService.updatePensionData(this.pensionData).subscribe({
      next:(pesnionInfo)=>{
        this.pensionData = pesnionInfo;
        this.pensionService.setPensionInfo()
      },
      error:(error)=>{
        throw Error (error.message)
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
    this.isDisable  = false
    let number = this.pensionData.monthlyPensionAmt;
    let increment = number * (this.pensionData.range / 100);
    let result = number + increment;
    this.pensionData.monthlyPensionAmt = Math.round(result);
    this.pensionData.Recommended = Math.round(this.pensionData.Recommended + result);
  }
}
