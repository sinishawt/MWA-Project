import { Component, OnInit } from '@angular/core';
import { Order } from '../../../common/order';

@Component({
  selector: 'app-maintain-orders',
  templateUrl: './maintain-orders.component.html',
  styleUrls: ['./maintain-orders.component.css']
})
export class MaintainOrdersComponent implements OnInit {

  orders: Order[];

  constructor() { }

  ngOnInit(): void {
  }

  cancelOrder(order: Order): void {

  }

  changeOrderStatus(order: Order): void {

  }

}
