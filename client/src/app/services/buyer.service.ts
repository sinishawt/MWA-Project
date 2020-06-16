import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Review } from '../common/review';


@Injectable({
  providedIn: 'root'
})
export class buyerService {

  private baseUrl = 'http://localhost:3000/cart/'

  private reviewURL = 'http://localhost:3000/review/'
  
  private retrieveURL = 'http://localhost:3000/review/productReview/'

  constructor(private httpClient: HttpClient) { }


  getShoppingCart(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }


  addToShoppingCart(id : string): Observable<any> {
    alert(id);
    return this.httpClient.post<any>(this.baseUrl + 'addToCart/' + id, id);
  }

  getReviewList(id : String) : Observable<any> {
    return this.httpClient.get<any>(this.retrieveURL + id);
  }

  addReview(review : Review) : Observable<any> {
    return this.httpClient.post<any>(this.reviewURL,review);
  }

}

