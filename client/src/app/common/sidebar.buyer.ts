
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-buyer',
  template: `
  <h3 class="my-4">Welcome Buyer</h3>
                <div class="list-group">
                    <a href="buyer/" class="list-group-item">Home</a>
                    <a href="buyer/view-cart" class="list-group-item">View Cart</a>
                    <a href="buyer/view-orders" class="list-group-item">My Orders</a>
                    <a href="buyer/shipping-address" class="list-group-item">Shipping Address </a>
                    <a href="buyer/payment-settings" class="list-group-item"> Payment Settings</a>
                    <a href="buyer/notifications" class="list-group-item"> Notifications</a>       
                </div>
  `,
  styleUrls: []
})
export class BuyerSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
