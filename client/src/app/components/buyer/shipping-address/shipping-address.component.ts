import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Shipping } from '../../../common/shippingAddress';
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  shipping: Shipping;
  addressForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
   let buyerId = '5ee920a906927d6f944a25ee';  ////////STATIC VALUE NEED TO COME FROM LOGIN

   if (!buyerId) {
    alert("Invalid action.")
    this.router.navigate(['seller/manage-products']);
    return;
  }
  this.addressForm = this.formBuilder.group({
    
    //status: [''],
    street: ['', Validators.required],
    zipCode: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    phoneNo: ['']
    
    //buyerId: [buyerId]
  });
  this.buyerService.getShippingAddress(buyerId)
    .subscribe(data => {
      //let temp = data.result.birthDate;
     // data.result.birthDate = this.pipe.transform(temp, 'yyyy-MM-dd');
      delete data.__v;
      //console.log("**** from angular" + data.result);
      this.addressForm.setValue(data);
    });

  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    this.buyerService.enterShippingAddress(this.addressForm.value)
    .pipe(first())
    .subscribe(
      data => {
        
          this.router.navigate(['buyer/']);
        
      },
      error => {
        alert(error);
      });
  }

}
