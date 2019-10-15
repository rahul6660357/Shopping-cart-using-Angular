import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { ParticlesModule } from 'angular-particle';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  Username;
  Password;
  Email;
  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#000'
        },
        shape: {
          type: 'polygon',
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 2000,
            size_min: 0.1,
            sync: false
          }
        }
      }
    };
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
