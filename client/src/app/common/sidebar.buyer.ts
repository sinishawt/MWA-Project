
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
                    <a href="/buyer/notifications" class="notification"><span>Notifications </span><span class="badge">3</span> </a>      
                </div>
                <div style="background-color: lightgrey; width: 200px; border: 6px solid #111109; padding: 20px; margin: 20px; text-align: center; ">
                    <p style = "text-size: 16px;"> Points </p>
                    <p style = "text-size: 50px;"> 0 <p>
                </div>
  `,
  styleUrls: ['sidebar.buyer.css']
})
export class BuyerSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
