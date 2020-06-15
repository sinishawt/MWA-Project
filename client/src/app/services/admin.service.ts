import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../common/review';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../common/api.response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/review/';

  getReviews(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  approveReview(id: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + id, id);
  }
}
