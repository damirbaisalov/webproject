import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

import {Product} from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopCart: Product[] = [];

  constructor() { }

  addProductToShopCart(product: Product){
    this.shopCart.push(product);
  }

  getProductInShopCart(): Observable<Product[]> {
    return of(this.shopCart);
  }

  removeFromShopCart(product: Product){
    for (let i=0;i<this.shopCart.length;i++){
      if(this.shopCart[i].id==product.id){
        this.shopCart.splice(i,1);
      }
    }
    // this.shopCart.forEach(currentProductInCart => {
    //     if (currentProductInCart.id == product.id){
    //         this.shopCart.splice(currentProductInCart.id,1);
    //     }
    // });
    this.shopCart.find(p => p.id==product.id)

  }

}
