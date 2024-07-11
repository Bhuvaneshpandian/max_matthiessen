import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';
import { PensionSchemeScreen } from 'src/model/Pension.model';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { PensionChartModel } from 'src/model/PensionChart.model';

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
   pensionChartInfo = new Observable<PensionChartModel[]>


  constructor(private http:HttpClient) {
  }

  setPopScreenInfo(screenInfo: PensionSchemeScreen){
    setTimeout(()=>{
      this.userSubject.next(screenInfo)
    },100)

  }

  getPensionScreenInfo():Subject<PensionSchemeScreen>{
      return this.userSubject
  }

  setPensionInfo(){
      this.pensionChartInfo = this.http.get<PensionChartModel[]>(`${environment.url}/pension`)
      

  }

  getPensionData(){
    return this.pensionChartInfo
  }

   updatePensionData(payLoad: PensionChartModel):Observable<PensionChartModel>{
      return this.http.put<PensionChartModel>(`${environment.url}/pension/${payLoad.id}`, payLoad);
  }

}
