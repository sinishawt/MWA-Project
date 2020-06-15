import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../common/api.response';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/seller/';

  getProducts(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'products/' + id);
  }


}
