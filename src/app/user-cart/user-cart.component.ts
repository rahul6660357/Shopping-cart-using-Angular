import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  Cart;

  constructor(private service: AppService, private router: Router, private http: ItemserviceService) {
  }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['/userlogin']);
    }
    this.http.showcart().subscribe((data) => {
      this.Cart = data;
    });
  }

  ADDQuantity(id) {
    console.log(id);
    this.http.addQuantity(id).subscribe((data1) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
    });
  }

  SUBQuantity(id) {
    this.http.subQuantity(id).subscribe((data1) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
    });
  }

  removeitem(pid) {
    this.http.removeItem(pid).subscribe((data3) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
    });
  }
}
