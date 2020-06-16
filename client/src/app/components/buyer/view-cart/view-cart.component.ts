import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../common/Cart';
import { Router } from "@angular/router";
import { buyerService } from '../../../services/buyer.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  items: Cart[];
  constructor(private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    this.buyerService.getShoppingCart('5ede8265253cba38d44f16c2')
    .subscribe(data => {
      this.items = data.cart;
      console.log(' *****' + data._id);
    });
  }

  // getProductsOfSeller(cart: Cart): void {
  //   this.buyerService.getShoppingCart('5ede8265253cba38d44f16c2')
  //   .subscribe(data => {
  //     this.items = data;
  //     //console.log("******" + data._id);
  //   });
  // }

  deleteFromCart(id: string){

  }
  order(){

  }

}
