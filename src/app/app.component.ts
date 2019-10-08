import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'shoppingCart';

  constructor(private router: Router, private service: AppService) { }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }
  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['user-cart']);
    }
  }
}
