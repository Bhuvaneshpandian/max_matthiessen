import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-down-menu',
  templateUrl: './mobile-down-menu.component.html',
  styleUrls: ['./mobile-down-menu.component.css']
})
export class MobileDownMenuComponent {

  activeUrl: string = "dashboard";

  constructor() {
    var newURL = window.location.pathname.split("/");
    this.activeUrl = newURL[1];
  }

  getActive(value: string){
    if (value === this.activeUrl) {
      return true
    }
    return false
  }

}


