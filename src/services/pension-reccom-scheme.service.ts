import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import { PensionSchemeScreen } from 'src/model/Pension.model';

export const popScreenInfo = {
  recomSrc: false,
  pension: false,
  popup: false
};

@Injectable({
  providedIn: 'root'
})

export class PensionReccomSchemeService {

   userSubject = new Subject<PensionSchemeScreen>();

  constructor() {
  }

  setPopScreenInfo(screenInfo: PensionSchemeScreen){
    setTimeout(()=>{
      this.userSubject.next(screenInfo)
    },100)

  }

  getPensionScreenInfo():Subject<PensionSchemeScreen>{
      return this.userSubject
  }

}
