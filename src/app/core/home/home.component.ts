import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from './../../authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error);
    });
  }

}
