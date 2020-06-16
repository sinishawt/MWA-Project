import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../common/Cart';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  items: Cart[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteFromCart(id: string){

  }
  order(){

  }

}
