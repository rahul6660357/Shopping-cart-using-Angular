import { Component, OnInit } from '@angular/core';
import {Details} from '../Details';
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
  details = Details;


  ngOnInit() {
    this.service.getDetails().subscribe((data) => {
      this.Names = data;
    });
  }
gotodeatils(id1) {

  this.router.navigate(['/details'], {queryParams: {id: id1}});
}

  showelectrical() {

    this.service.getelectical('electrical').subscribe((data1) => {
      this.Names = data1;
    });
  }

  showhome() {
    this.service.getDetails().subscribe((data2) => {
      this.Names = data2;
    });
  }

  showbooks() {
    this.service.getelectical('book').subscribe((data2) => {
      this.Names = data2;
    });
  }

  showshoes() {
    this.service.getelectical('shoes').subscribe((data3) => {
      this.Names = data3;
    });
  }

  showclothes() {
    this.service.getelectical('clothes').subscribe((data4) => {
      this.Names = data4;
    });
  }
  handleSelectedevent($event, number1, number2) {
    this.service.getbypricebtw(number1, number2).subscribe((data4) => {
      this.Names = data4;
    });
  }
}
