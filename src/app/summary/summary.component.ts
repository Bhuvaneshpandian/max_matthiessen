import { Component, OnInit } from '@angular/core';
import { PensionSchemeScreen } from 'src/model/Pension.model';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
canShowRecom:boolean = false;
receivedRecommendation:any;
showRecScreenInfo:PensionSchemeScreen={ recomSrc: false,pension: false,popup: false}

constructor(private recScreenService:PensionReccomSchemeService){}

ngOnInit(): void {
this.recScreenService.getPensionScreenInfo().subscribe((value)=>{
    this.showRecScreenInfo = value
})

}

onRecommendationChange(value: boolean) {
  this.recScreenService.setPopScreenInfo({ recomSrc: true,pension: false,popup: false})
}

}
