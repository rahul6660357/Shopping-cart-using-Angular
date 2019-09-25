import { Component, OnInit } from '@angular/core';
import {Details} from '../Details';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  details = Details;


  ngOnInit() {
  }

}
