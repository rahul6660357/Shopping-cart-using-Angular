import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';
import {ItemserviceService} from './itemservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';
  private role;

  constructor(private router: Router, private service: AppService, private http: ItemserviceService) {
  }

  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }
  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['user-cart']);
    }
  }

  ngOnInit() {
    this.http.getRole().subscribe((data5) => {
      this.role = data5;
      console.log(this.role);
    });
  }
}
