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
  total;
  tax;
totalprice;
  constructor(private service: AppService, private router: Router, private http: ItemserviceService) {
  }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['/userlogin']);
    }
    this.http.showcart().subscribe((data) => {
      this.Cart = data;
    });
    this.http.getTotal().subscribe((data5) => {
      this.total = data5;
      this.tax = parseInt(String((this.total * 0.10)), 10);
      if (this.total < 500 && this.total > 0) {
        this.totalprice = this.total + this.tax + 40;
      } else {
        this.totalprice = this.total + this.tax ;
      }
    });
  }

  ADDQuantity(id) {
    console.log(id);
    this.http.addQuantity(id).subscribe((data1) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
      this.http.getTotal().subscribe((data5) => {
        this.total = data5;
        this.tax = parseInt(String((this.total * 0.10)), 10);
        if (this.total < 500 && this.total > 0) {
          this.totalprice = this.total + this.tax + 40;
        } else {
          this.totalprice = this.total + this.tax ;
        }

      });
    });
  }

  SUBQuantity(id) {
    this.http.subQuantity(id).subscribe((data1) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
      this.http.getTotal().subscribe((data5) => {
        this.total = data5;
        this.tax = parseInt(String((this.total * 0.10)), 10);
        if (this.total < 500 && this.total > 0) {
          this.totalprice = this.total + this.tax + 40;
        } else {
          this.totalprice = this.total + this.tax ;
        }

      });
    });
  }

  removeitem(pid) {
    this.http.removeItem(pid).subscribe((data3) => {
      this.http.showcart().subscribe((data) => {
        this.Cart = data;
      });
      this.http.getTotal().subscribe((data5) => {
        this.total = data5;
        this.tax = parseInt(String((this.total * 0.10)), 10);
        if (this.total < 500 && this.total > 0) {
          this.totalprice = this.total + this.tax + 40;
        } else {
          this.totalprice = this.total + this.tax ;
        }

      });
    });
  }

  productPurchased() {
    this.router.navigate(['/history']);
    this.http.checkout().subscribe((data) => {
    });
  }
}
