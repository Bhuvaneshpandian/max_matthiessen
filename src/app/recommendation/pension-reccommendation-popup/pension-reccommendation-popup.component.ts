import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/model/Recommendation.model';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';
import { RecommendationService } from 'src/services/recommendation.service';

@Component({
  selector: 'app-pension-reccommendation-popup',
  templateUrl: './pension-reccommendation-popup.component.html',
  styleUrls: ['./pension-reccommendation-popup.component.css'],
})
export class PensionReccommendationPopupComponent implements OnInit {
  constructor(
    private recScreenService: PensionReccomSchemeService,
    private recommendationService: RecommendationService
  ) { }
  recContent: Recommendation[] = [];
  canShowLoader: boolean = false;

  ngOnInit(): void {
    this.fetchRecomInfo()
  }

  fetchRecomInfo() {
    this.canShowLoader = true
    this.recommendationService.fetchRecommendationInfo().subscribe({
      next: (content) => {
        this.recContent = content;
      },
      error: (error) => {
        console.error('Error fetching dashboard content:', error);
        this.recContent = [];
      },
      complete: () => {
        this.canShowLoader = false

      },
    });
  }

  onRowClick() {
    this.recScreenService.setPopScreenInfo({
      recomSrc: false,
      pension: true,
      popup: false,
    });
  }
}
