import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { StatusBar, Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'max-matthiessen';

  constructor() {

this.hideStatusbar()
  }

  async hideStatusbar(){
await StatusBar.hide()
  }



}
