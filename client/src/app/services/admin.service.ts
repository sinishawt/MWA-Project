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

  baseUrl: string = 'http://localhost:3000/admin/';

  getReviews(): Observable<any> {
    return this.http.get(this.baseUrl + 'pendingReviews');
  }

  approveReview(id: string): Observable<ApiResponse> {
    console.log(this.baseUrl + 'pendingReviews/' + id);
    return this.http.post<ApiResponse>(this.baseUrl + 'pendingReviews/' + id, id);
  }

  denyReview(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'pendingReviews/' + id);
  }
}
