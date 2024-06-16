import { Component, EventEmitter, Output } from '@angular/core';
import { PensionReccommendationPopupComponent } from '../../recommendation/pension-reccommendation-popup/pension-reccommendation-popup.component';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-portfolio-recommendation',
  templateUrl: './portfolio-recommendation.component.html',
  styleUrls: ['./portfolio-recommendation.component.css']
})
export class PortfolioRecommendationComponent {
  canShowThis: boolean = false;
  canShowRecommendation = false;

  constructor(private recScreenService: PensionReccomSchemeService) {
    setTimeout(() => {
      this.canShowThis = true
    }, 2000)
  }


  onViewClick() {
    this.recScreenService.setPopScreenInfo({ recomSrc: true, pension: false, popup: false })

  }
}
