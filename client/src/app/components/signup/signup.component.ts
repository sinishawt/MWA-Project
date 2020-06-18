







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
       // console.log('waiting for approval' + this.addForm.value.role);
        if(this.addForm.value.role == 'seller'){
          alert('Seller Successfully Registered, Awaiting Approval');
          console.log('waiting for approval' + this.addForm.value.role);
          this.router.navigate(['login']); 
        }else {
          alert('User Successfully Registered, You can now log in and Start Using');
        this.router.navigate(['login']); 
        }
        // alert('User Successfully Registered, You can now log in and Start Using');
        // this.router.navigate(['login']); //login
      });
  }

}
