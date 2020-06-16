import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { authenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService : authenticationService, private router : Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authenticationService.addUser(this.addForm.value)
      .subscribe(data => {
        alert('User Successfully Registered, You can now log in and Start Using');
        this.router.navigate(['product']);
      });
  }

}
