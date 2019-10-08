import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private service: AppService, private router: Router) {
  }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['/userlogin']);
    }
  }
 }
