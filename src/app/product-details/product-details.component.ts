import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Details} from '../Details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userid;
  constructor(private activatedroute: ActivatedRoute) { }
  details = Details;

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.userid = params.id;
    });
  }

}
