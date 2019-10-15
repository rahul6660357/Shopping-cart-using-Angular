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
    details: string, image: object, catogory: string, subcatogory: string, active: number};
  role;

  ngOnInit() {
    this.service.getDetails().subscribe((data3) => {
      this.Names = data3;
      this.activatedroute.queryParams.subscribe(params => {
      this.userid = params.id;
      this.list = this.alldetails(this.userid);
    });
    });
    this.service.getRole().subscribe((data5) => {
      this.role = data5;
      console.log(this.role);
    });
  }

  private alldetails(id) {
    for (let i = 0; i < this.Names.length; i++) {
      if (this.Names[i].product_id == id) {
        return this.Names[i];
      }
    }
  }

  addtocart(pid) {
    this.service.addtoCart(pid).subscribe((data) => {

    });
  }

  Editproduct(pid) {
    this.service.EditProduct(pid, this.list).subscribe((data5) => {
    });
  }
}
