import { Component } from '@angular/core';
import { PensionReccomSchemeService } from 'src/services/pension-reccom-scheme.service';

@Component({
  selector: 'app-pension-reccommendation-popup',
  templateUrl: './pension-reccommendation-popup.component.html',
  styleUrls: ['./pension-reccommendation-popup.component.css']
})
export class PensionReccommendationPopupComponent {
  constructor(private recScreenService: PensionReccomSchemeService) {

  }
  onRowClick() {
    this.recScreenService.setPopScreenInfo({ recomSrc: false, pension: true, popup: false })
  }
}
