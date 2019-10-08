import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router, private service: AppService, private authservice: AuthenticationService) {
  }

  ngOnInit() {
    if (this.service.checklogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    this.authservice.authenticate(this.username, this.password).subscribe(data => {
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    });
  }

  logout() {
    this.service.isLoggedIn(false);
  }

}


