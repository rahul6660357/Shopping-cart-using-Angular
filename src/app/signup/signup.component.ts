import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  Username;
  Password;
  Email;

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  signupfun() {
    const data = {
      email : this.Email,
      password: this.Password,
      firstname: this.Username
    };
    this.service.sendnewUser(data);
  }
}
