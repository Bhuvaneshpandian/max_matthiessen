import { Component, OnInit } from '@angular/core';
import { PensionSchemeScreen } from 'src/model/Pension.model';
import { AuthService } from 'src/services/auth.service';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  canShowRecom: boolean = false;
  showRecScreenInfo: PensionSchemeScreen = { recomSrc: false, pension: false, popup: false }
  userName: string = ""
  receivedRecommendation:any


  constructor(private recScreenService: PensionReccomSchemeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserInfo().userName
    this.recScreenService.getPensionScreenInfo().subscribe((value) => {
      this.showRecScreenInfo = value
    })

  }

  onRecommendationChange(value: boolean) {
    this.recScreenService.setPopScreenInfo({ recomSrc: true, pension: false, popup: false })
  }

}
