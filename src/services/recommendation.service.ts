import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Recommendation } from 'src/model/Recommendation.model';


@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http: HttpClient) { }




  fetchRecommendationInfo(): Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(
      `${environment.url}/recommendation`
    );

  }
}
