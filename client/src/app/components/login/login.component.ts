import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { authenticationService } from '../../services/authentication.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder, private authenticationService : authenticationService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authenticationService.login(this.addForm.value)
      .subscribe(data => {
        //console.log(data.token);
       // alert(data.token);
        window.localStorage.setItem('token' , data.token);
        window.localStorage.setItem('userId' , data.user._id);
        window.localStorage.setItem('userName' , data.user.name);
        
        
        let role = data.user.role;
      
        if(role === "Buyer" || role === "buyer"){
            this.router.navigate(['product']);
        }
        else if(role=== "Seller" || role === "buyer"){
            this.router.navigate(['seller']);
        }
        else {
          alert('Unkown Role');
        }
      });
  
}
}
