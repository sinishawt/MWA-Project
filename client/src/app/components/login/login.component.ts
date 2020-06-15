import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder, private loginService : LoginServiceService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loginService.login(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

}
