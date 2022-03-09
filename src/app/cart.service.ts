import { Injectable } from '@angular/core';
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Constructor(s)
  constructor() { }
  //Class-wide variables
  items: Product[][] = [[]];
  //Methods
  addItems(product: Product) {
    if(!this.items[0].includes(product)){
      this.items[0].push(product);
    }
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
