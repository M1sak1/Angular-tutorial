import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Constructor(s)
  constructor(
      private http: HttpClient
  ) { }
  //Class-wide variables
  items: Product[][] = [[]];
  //Methods
  addItems(product: Product) {
    if(!this.items[0].includes(product)){
      this.items[[0][0]].push(product);
    }
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }
}
