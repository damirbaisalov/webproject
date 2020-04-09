import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Product} from '../interfaces/product';
import {ProductList} from '../data/product-list';
import {CategoryList} from '../data/category-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products = ProductList;
  categories = CategoryList;

  getProductList(): Observable<Product[]> {
    return of(this.products);
  }

  getProductByCategory(id): Observable<Product[]> {
    const byIdProduct = this.products.filter(p => p.category === id);
    return of(byIdProduct);
  }

  getNameOfCategory(id): Observable<any> {
    const category = this.categories.find(c => c.id === id);
    return of(category);
  }

  // getSortedProductsByPrice(): Observable<Product[]>{
  //   for (let i=0;i<this.products.length;i++){
      
  //   }
  //   const productsOrted = this.products.sort()
  //   return 
  // }

  constructor() { }
}
