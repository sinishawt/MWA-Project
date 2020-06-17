import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Review } from '../common/review';


@Injectable({
  providedIn: 'root'
})
export class buyerService {

  private cartUrl = 'http://localhost:3000/cart/'

  private reviewURL = 'http://localhost:3000/review/'

  private retrieveURL = 'http://localhost:3000/review/productReview/'


  constructor(private httpClient: HttpClient) { }


  getShoppingCart(id: string): Observable<any> {

    //alert(this.httpClient.get<any>(this.cartUrl + 'getCart/' + id));
    console.log("Cart: ", this.httpClient.get<any>(this.cartUrl + 'getCart/' + id));
    return this.httpClient.get(this.cartUrl + 'getCart/' + id);
  }




  addToShoppingCart(id : string): Observable<any> {
    return this.httpClient.post<any>(this.cartUrl + 'addToCart/' + id, id);
  }

  deleteItem(id : string): Observable<any> {
    alert(id);
    return this.httpClient.delete<any>(this.cartUrl + 'deletCart/' + id);
  }



  getReviewList(id : String) : Observable<any> {
    return this.httpClient.get<any>(this.retrieveURL + id);
  }

  addReview(review : Review) : Observable<any> {
    return this.httpClient.post<any>(this.reviewURL,review);
  }

}
