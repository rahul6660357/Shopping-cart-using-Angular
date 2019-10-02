import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'rahul'
  password = 'rahul'
  invalidLogin = false
  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
