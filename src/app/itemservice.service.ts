import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private httpClient: HttpClient) { }
  getDetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productdetails', {headers});
  }
  getelectical(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productcatogory/' + type, {headers} );
  }
  getbypricebtw(type1 , type2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productpricebtw/' + type1 + '/' + type2, {headers} );
  }
  getbypricebtwcat(type1, type2, type3) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productpricebtwcat/' + type1 + '/' + type2 + '/' + type3, {headers});
  }
}
