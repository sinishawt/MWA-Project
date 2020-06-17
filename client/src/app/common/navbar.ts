
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl:'./navbar.html',
  styles: []
})
export class NavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
  }

}
