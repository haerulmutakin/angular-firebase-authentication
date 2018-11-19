import { UserService } from './../../authentication/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from './../../authentication/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../authentication/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: UserModel = new UserModel();
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.route.data.subscribe( data => {
      const userData = data['data'];
      if (userData) {
        this.userData = userData;
        this.buildUserForm(userData);
      }
    });
  }

  buildUserForm(user) {
    this.userForm = this.fromBuilder.group({
      name: [user.name, Validators.required]
    });
  }

  logout() {
    this.authService.doLogout()
    .then((res) => {
      this.router.navigate(['/login']);
    }, (error) => {
      console.log('Logout error', error);
    });
  }

  updateUser() {
    this.userService.updateCurrentUser(this.userForm.value)
    .then(res => {
      window.location.reload();
    }, err => console.log(err));
  }

}
