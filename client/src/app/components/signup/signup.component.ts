import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignupservicesService } from '../../services/signupservices.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private signUpServices : SignupservicesService, private router : Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.signUpServices.addUser(this.addForm.value)
      .subscribe(data => {
        alert('User Successfully Registered, You can now log in and Start Using');
        this.router.navigate(['product']);
      });
  }

}