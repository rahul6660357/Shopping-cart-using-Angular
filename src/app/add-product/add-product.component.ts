import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productname;
  productcategorie;
  image;
  productsubcategorie;
  productdescription;
  price;
  active;

  constructor( private router: Router, private http: ItemserviceService) { }

  ngOnInit() {
  }

  addproduct() {
    const data = {
      name: this.productname,
      catogory: this.productcategorie,
      subcatogory: this.productsubcategorie,
      image: this.image,
      price: this.price,
      active: this.active,
      details: this.productdescription
    };
    this.router.navigate(['/home']);
    this.http.AddProduct(data).subscribe((data1) => {

    });
  }
}
