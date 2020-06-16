import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../common/product';
import { Session } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = 'http://localhost:3000/cart/'

  constructor(private httpClient: HttpClient) { }


  getShoppingCart(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }


  addToShoppingCart(id : string): Observable<any> {
    alert(id);
    return this.httpClient.post<any>(this.baseUrl + 'addToCart/' + id, id);
  }

}

