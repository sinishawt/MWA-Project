import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Review } from '../../app/common/review'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = 'http://localhost:3000/review/'
  
  constructor(private httpClient: HttpClient) { }

  getReviewList() : Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
  addReview(review : Review) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl,review);
  }
}
