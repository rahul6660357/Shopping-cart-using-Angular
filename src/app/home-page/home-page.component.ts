import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Names;
  constructor( private router: Router, private service: ItemserviceService) { }
category;

  ngOnInit() {
    this.service.getDetails().subscribe((data) => {
      this.Names = data;
    });
  }
gotodeatils(id1) {

  this.router.navigate(['/details'], {queryParams: {id: id1}});
}

  showelectrical() {
    this.category = 'electrical';
    this.service.getelectical('electrical').subscribe((data1) => {
      this.Names = data1;
    });
  }

  showhome() {
    this.category = null;
    this.service.getDetails().subscribe((data2) => {
      this.Names = data2;
    });
  }

  showbooks() {
    this.category = 'book';
    this.service.getelectical('book').subscribe((data2) => {
      this.Names = data2;
    });
  }

  showshoes() {
    this.category = 'shoes';
    this.service.getelectical('shoes').subscribe((data3) => {
      this.Names = data3;
    });
  }

  showclothes() {
    this.category = 'clothes';
    this.service.getelectical('clothes').subscribe((data4) => {
      this.Names = data4;
    });
  }
    handleSelectedevent($event, number1, number2) {
    if (!this.category) {
      this.service.getbypricebtw(number1, number2).subscribe((data4) => {
        this.Names = data4;
      });
    } else {
      this.service.getbypricebtwcat(number1 , number2 , this.category).subscribe((data5) => {
        this.Names = data5;
      });
    }
  }
}
