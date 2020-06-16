import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://localhost:3000/auth/signin'

  constructor(private httpClient: HttpClient) { }

  login(login : any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl,login);
  }

}
