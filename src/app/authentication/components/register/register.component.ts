import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const formValues = this.registerForm.value;
    this.authService.doRegister(formValues)
    .then(res => {
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
    }, err => {
      this.errorMessage = err.message;
    });
  }

}
