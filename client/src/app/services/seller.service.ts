import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../common/api.response';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/seller/';

  getProducts(id: string): Observable<any> {    //////////////////Cahange to dynamic value
   // console.log(this.baseUrl + 'products/' + '5ee773e74f720d6af4eed445');
    return this.http.get(this.baseUrl + 'products/' + '5ee773e74f720d6af4eed445');
  }

  addProduct(product: Product): Observable<any> {
    //console.log(product);
    return this.http.post<any>(this.baseUrl + 'products/', product);
  }


}
