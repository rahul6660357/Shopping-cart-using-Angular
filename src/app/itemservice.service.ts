import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private httpClient: HttpClient) { }
  getDetails() {
    return this.httpClient.get('http://localhost:8080/product/productdetails');
  }
  getelectical(type) {
    return this.httpClient.get('http://localhost:8080/product/productcatogory/' + type);
  }
  getbypricebtw(type1 , type2) {
    return this.httpClient.get('http://localhost:8080/product/productpricebtw/' + type1 + '/' + type2 );
  }
  getbypricebtwcat(type1, type2, type3) {
    return this.httpClient.get('http://localhost:8080/product/productpricebtwcat/' + type1 + '/' + type2 + '/' + type3);
  }
}
