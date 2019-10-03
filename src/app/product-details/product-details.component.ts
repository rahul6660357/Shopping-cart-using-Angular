import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Details} from '../Details';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userid;

constructor(private activatedroute: ActivatedRoute, private service: ItemserviceService) { }
  // details = Details;
  Names ;
  private list: {product_id: number , name: string, price: number,
    details: string, image: string, catogory: string, subcatogory: string, active: number, itemdetails: null };

  ngOnInit() {
    this.service.getDetails().subscribe((data3) => {
      this.Names = data3;
      console.log(this.Names);
      this.activatedroute.queryParams.subscribe(params => {
      this.userid = params.id;
      this.list = this.alldetails(this.userid);
      console.log(this.Names);
    });
    });
  }

  private alldetails(id) {
    console.log(this.Names);
    for (let i = 0; i < this.Names.length; i++) {
      if (this.Names[i].product_id == id) {
        return this.Names[i];
      }
    }
  }
}
