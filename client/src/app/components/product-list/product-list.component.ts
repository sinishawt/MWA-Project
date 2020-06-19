import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {buyerService} from '../../services/buyer.service';
import {Product} from '../../common/product';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {


  products: Product[];

  constructor(private router: Router, private productService: ProductService, private buyerService :buyerService) { }

  ngOnInit() {
    this.listProducts();
  }

   listProducts() {
    this.productService.getProductList().subscribe(
          data => { this.products = data; }
    );
  }

  addCart(items: Product)  {
      this.buyerService.addToShoppingCart(items._id).subscribe(res => res);
      console.log(items._id);
  }

  viewDetail(id : any) {
    window.localStorage.removeItem("productId");
    window.localStorage.setItem("productId", id.toString());
    this.router.navigate(['viewProduct']);
  }
}
