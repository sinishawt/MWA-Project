import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SellerService } from '../../../services/seller.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Product[];
  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.getProducts('test')
    .subscribe(data => {
      this.products = data;
      //console.log(data.result);
    });
  }

  getProductsOfSeller(product: Product): void {
    this.sellerService.getProducts(product.sellerId)
    .subscribe(data => {
      this.products = data;
      //console.log(data.result);
    });
  }

  addProduct(): void {
    this.router.navigate(['seller/manage-products/add-products']);
  }

}
