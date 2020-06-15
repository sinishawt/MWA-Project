import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ShoppingCartService} from '../../services/shoppingcart.service';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Product[];
  constructor(private productService: ProductService, private shoppingService :ShoppingCartService) { }

  ngOnInit() {
    this.listProducts();
  }

   listProducts() {
    this.productService.getProductList().subscribe(
          data => { this.products = data; }
    );
  }

  addCart(items: Product)  {
      this.shoppingService.addToShoppingCart(items._id).subscribe(res => res);
      console.log(items._id);
  }
}
