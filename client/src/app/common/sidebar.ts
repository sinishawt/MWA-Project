
import { Component, OnInit } from '@angular/core';
import { User } from './userResponse';


@Component({
  selector: 'app-side',
  template: `
  <div>
  <pre>
  
  </pre>
  </div>
  <div class="alert alert-success" role="alert">
  <p>Welcome</p>
  <hr>
  <div *ngIf="user">
  <p> {{user}} </p>
  </div>
  </div>  
      <div class="list-group">
          <button type="button" class="btn btn-secondary">Electronics</button>
          <button type="button" class="btn btn-secondary">Furniture</button>
          <button type="button" class="btn btn-secondary">Books</button>
          <button type="button" class="btn btn-secondary">Sports</button>
          <button type="button" class="btn btn-secondary">Clothing</button>
          <button type="button" class="btn btn-secondary">food</button>
      </div>
  `,
  styles: ['<link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">']
})
export class SideBarComponent implements OnInit {

  user : String = window.localStorage.getItem('userName');

  constructor() { }

  ngOnInit() {
  }

}
