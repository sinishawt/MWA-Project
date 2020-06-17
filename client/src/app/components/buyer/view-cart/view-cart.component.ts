import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../common/Cart';
import { Router } from "@angular/router";
import { buyerService } from '../../../services/buyer.service';
import { Product } from 'src/app/common/product';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  items: Cart[];
  constructor(private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    this.buyerService.getShoppingCart('5ee9201706927d6f944a25ec')
    .subscribe(data => {
       console.log('in view caret compnent data' + data);
      this.items = data.items;
      console.log('Cart Items' + this.items);
    });
  }


  deleteFromCart(item: Product)  {
    this.buyerService.deleteItem(item._id).subscribe(res => res);
    console.log(item._id);
}


  order(){

  }

}
