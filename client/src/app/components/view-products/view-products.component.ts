import { Component, OnInit } from '@angular/core';
import {Product} from '../../common/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { buyerService } from '../../services/buyer.service';
import {Review} from '../../common/review';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  title : any;
  price : any;
  description : any;
  reviews : Review[];
  addForm: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder, private router: Router, private productService : ProductService,private buyerService : buyerService) { }

  ngOnInit(): void {
    let productId = window.localStorage.getItem("productId");
    if(!productId){
      alert('invalid action!')
      this.router.navigate(['product']);
      return;
    }

    this.productService.getAProduct(productId)
    .subscribe(data => {
      this.title = data.title;
      this.price = data.price;
      this.description = data.descreption;
    });

    this.buyerService.getReviewList(productId)
    .subscribe(data =>{
      this.reviews = data;
    });

    this.addForm = this.formBuilder.group({
      orderProductId : [productId, Validators.required],
      status : ['Created'],
      stars: ['', Validators.required],
      comment: ['', Validators.required]
    });

  }

  onSubmit() {
    this.buyerService.addReview(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['']);
      });
  }

}
