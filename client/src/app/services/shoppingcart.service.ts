import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = 'http://localhost:3000/shopingCart/add-to-cart/'

  constructor(private httpClient: HttpClient) { }


  getShoppingCart(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }

}

