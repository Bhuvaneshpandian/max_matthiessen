import { Component } from '@angular/core';
import { News } from 'src/model/News.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newsList:News[] = [{
    image: "../../assets/new1.png",
    heading: "Apple's market cap closes above $3 trillion",
    news: "Apple's market cap closed at about $3 trillion for the first time since August after its shares climbed 2% to $193.42 per share on Tuesday."
  },
  {
    image: "../../assets/news2.png",
    heading: "Tesla shares drop 5% after HSBC initiates coverage, says sell",
    news: "Tesla shares declined by about 5% on Thursday to close at $209.98 after HSBC initiated coverage of the EV maker with a “reduce” rating and a price target of $146 per share."
  },

  {
    image: "../../assets/news3.png",
    heading: "Google launches its largest and ‘most capable’ AI model, Gemini",
    news: "Tesla shares declined by about 5% on Thursday to close at $209.98 after HSBC initiated coverage of the EV maker with a “reduce” rating and a price target of $146 per share."
  },
]

}
