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
    
       // alert(items.descreption);
      this.shoppingService.addToShoppingCart(items._id);
      console.log(items._id);
  }
}
