import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-recommendation',
  templateUrl: './portfolio-recommendation.component.html',
  styleUrls: ['./portfolio-recommendation.component.css']
})
export class PortfolioRecommendationComponent {
  canShowThis: boolean = false;
  canShowRecommendation = false;

  @Output() recommendationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitRecommendationChange() {
    this.recommendationChange.emit(this.canShowRecommendation);
  }

  constructor() {
    setTimeout(() => {
      this.canShowThis = true
    }, 2000)
  }


  onViewClick() {
    this.canShowRecommendation = true
    this.emitRecommendationChange();

  }
}
