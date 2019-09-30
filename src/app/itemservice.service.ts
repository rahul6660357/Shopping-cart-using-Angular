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
}
