import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, products } from '../products';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    // gets the product Id from the current route, ie the URL
    const routeParms = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParms.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  //adding stuff to the cart
  addToCart(product: Product){
    this.cartService.addItems(product);
    window.alert('Added an ' + product.name + '  to your cart');
  }

}
