import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Product} from '../interfaces/product';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }


  getProductFromCart(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/cart/products/`);
  }

  addProductToCart(product: Product) {
    return this.http.post<Product>(`${this.BASE_URL}/api/cart/products/`, product);
  }

  deleteProductFromCart(product: Product) {
    return this.http.delete<Product>(`${this.BASE_URL}/api/cart/products/${product.id}/`);
  }


}
