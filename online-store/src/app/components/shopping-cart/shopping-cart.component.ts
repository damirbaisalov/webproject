import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsInCart : Product[] = []

  constructor(private shopCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.getProductInCart()
  }

  getProductInCart(): void {
    this.shopCartService.getProductInShopCart().subscribe(p => this.productsInCart = p)
  }

  removeProductFromCart(product: Product){
    this.shopCartService.removeFromShopCart(product)
  }

}
