import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'max-matthiessen';

  constructor() {

    this.fromEvent(document.body, 'resize').subscribe((value) => {
      console.log(value)

    })

  }

  fromEvent(target: any, eventName: string): Observable<Event> {
    return fromEvent(target, eventName);
  }


}
