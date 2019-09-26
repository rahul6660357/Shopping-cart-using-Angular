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
  private list: { price: number; name: string; description: string; id: number; url: string };

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.userid = params.id;
      this.list = this.alldetails(this.userid);
    });
  }

  private alldetails(id) {
    for (let i = 0; i < Details.length; i++) {
      if (Details[i].id == id) {
        return Details[i];
      }
    }
  }
}
