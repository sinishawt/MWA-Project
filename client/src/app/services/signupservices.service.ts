import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../common/userResponse';

@Injectable({
  providedIn: 'root'
})
export class SignupservicesService {

  private baseUrl = 'http://localhost:3000/signup'

  constructor(private httpClient: HttpClient) { }

  addUser(user : User): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl ,user);
  }
}
