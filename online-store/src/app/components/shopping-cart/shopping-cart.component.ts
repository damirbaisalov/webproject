import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsInCart: Product[];

  constructor(private shopCartService: ShoppingCartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductFromCart();
  }

  getProductFromCart(): void {
    this.shopCartService.getProductFromCart().subscribe( products => this.productsInCart = products);
  }

  deleteProductsFromCart(product: Product) {
    this.productsInCart = this.productsInCart.filter(p => p !== product);
    this.shopCartService.deleteProductFromCart(product).subscribe();
  }


}
