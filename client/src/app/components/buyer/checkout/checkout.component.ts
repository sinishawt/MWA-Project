import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutForm: FormGroup;
  formBuilder: any;

  constructor() { }

  ngOnInit(): void {
    this.checkOutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }

  checkOut() {

  }



}
