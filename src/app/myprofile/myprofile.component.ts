import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
Profile;
  FirstName;
  Password;
  LastName;
  Email;
  PhnNo;
  constructor(private service: AppService, private router: Router, private http: ItemserviceService) { }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getUserDetails().subscribe((data) => {
      this.Profile = data;
     // console.log(this.Profile);
    });
  }

  UpdateUser() {
    const data = {
      email : this.Email,
      password: this.Password,
      firstname: this.FirstName,
      lastname: this.LastName
    };
    console.log(data);
   // this.http.UpdatethisUser(data);
  }
}
