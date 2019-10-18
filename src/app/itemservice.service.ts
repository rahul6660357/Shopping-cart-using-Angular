import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private httpClient: HttpClient) {
  }

  getDetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productdetails' , {headers});
  }

  getelectical(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productcatogory/' + type, {headers});
  }

  getbypricebtw(type1, type2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productpricebtw/' + type1 + '/' + type2, {headers});
  }

  getbypricebtwcat(type1, type2, type3) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productpricebtwcat/' + type1 + '/' + type2 + '/' + type3, {headers});
  }

  addtoCart(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/addproduct/receive/' + type, {headers});
  }
  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/showcart/receive', {headers});
  }
  addQuantity(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/addquantity/' + type , {headers});
  }
  subQuantity(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/subquantity/' + type , {headers});
  }

  removeItem(pid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/removefromcart/receive/' + pid , {headers});
  }

  getTotal() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/gettotal/recieve' , {headers});
  }

  getHistory() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/order/gethistory/receive' , {headers});
  }
  checkout() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/checkout/recieve' , {headers});
  }

  getUserDetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Users/getuserdetail' , {headers});
  }

  UpdatethisUser(data, type) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:8081/Users/updateuser/' + type , data,  {headers});
  }

  AddProduct(data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:8081/product/addproduct'  , data,  {headers});
  }

  EditProduct(type , data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:8081/product/updateitem/'  + type,  data, {headers});
  }

  SearchByName(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/product/productname/'  + type,  {headers});
  }

  getRole() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Users/getuserrole' ,  {headers});
  }

  DeleteProduct(pid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.delete('http://localhost:8081/product/deleteproduct/' + pid ,  {headers});
  }

  ClearCart() {
    console.log('hello');
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/cart/clearcart/recieve',  {headers});
  }
}
