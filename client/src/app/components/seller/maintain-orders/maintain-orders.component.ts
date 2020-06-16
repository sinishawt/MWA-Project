import { Component, OnInit } from '@angular/core';
import { Order } from '../../../common/order';
import { Router } from "@angular/router";
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'app-maintain-orders',
  templateUrl: './maintain-orders.component.html',
  styleUrls: ['./maintain-orders.component.css']
})
export class MaintainOrdersComponent implements OnInit {

  orders: Order[];

  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.getOrders('test')
    .subscribe(data => {
      this.orders = data;
      //console.log(data.result);
    });
  }

  cancelOrder(order: Order): void {

  }

  changeOrderStatus(order: Order): void {

  }

}
