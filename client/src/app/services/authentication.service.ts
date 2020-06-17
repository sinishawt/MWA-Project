import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../common/userResponse';


@Injectable({
  providedIn: 'root'
})
export class authenticationService{

  private baseUrl = 'http://localhost:3000/auth/signin'

  private signUp = 'http://localhost:3000/signup'

  

  constructor(private httpClient: HttpClient) { }

  login(login : any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl,login);
  }

  addUser(user : User): Observable<any> {
    return this.httpClient.post<any>(this.signUp ,user);
  }

  getToken() : any {
    return window.localStorage.getItem("userInfo");
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('userInfo');
    return (authToken !== null) ? true : false;
  }

}
