import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
canShowRecom:boolean = false;
receivedRecommendation:any;

// Method to handle the event from the child component
onRecommendationChange(value: boolean) {
  this.receivedRecommendation = value
}

}
