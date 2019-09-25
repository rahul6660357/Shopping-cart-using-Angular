import { Component, OnInit } from '@angular/core';
import {Details} from '../Details';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private router: Router) { }
  details = Details;


  ngOnInit() {
    }
gotodeatils(id1) {

  this.router.navigate(['/details'], {queryParams: {id: id1}});
}
}
