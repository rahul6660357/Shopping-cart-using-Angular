import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import { ParticlesModule } from 'angular-particle';
// import '../../particles';
// import '../../app';

import '../../testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  username;
  password;

  constructor(private router: Router, private service: AppService, private authservice: AuthenticationService) {
  }

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
          type: 'star',
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
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

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






