import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  login() {
    const formValues = this.loginForm.value;
    this.authService.doLogin(formValues)
      .then(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }

}
