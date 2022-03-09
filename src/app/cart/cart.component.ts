import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //constructors
  constructor(
      private cartService: CartService
  ) { }
  //Class-wide variables
  items = this.cartService.getItems();
  //Methods
  ngOnInit(): void {
  }

}
