import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginResponseModel } from '../models/login-response.model';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responseMessage: string;
  userLoginForm: FormGroup;
  loginModel: Login;
  returnUrl: string;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router, public authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.spinner.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.userLoginForm.controls; }

  onSubmit(): void {
    this.spinner.show();
    const newLoginModel: Login = Object.assign({}, this.userLoginForm.value);
    this.loginService.userLogin(newLoginModel).subscribe(
      (data: LoginResponseModel) => {
        console.log(data);
        if (data.Status) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', data.UserName);
          this.router.navigate([this.returnUrl]);
        }
        else {
          this.responseMessage = data.Message;
        }
      }
    );
  }
}
