import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../interfaces/product';
// import {ProductList} from '../data/product-list';
// import {CategoryList} from '../data/category-list';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  // products = ProductList;
  // categories = CategoryList;

  private categoriesUrl = 'api/categories';
  private productsUrl = 'api/products';
  products: Product[];
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductByCategory(id: number): Observable<Product[]> {
    const url = `${this.productsUrl}/?category=${id}`;
    return this.http.get<Product[]>(url);
  }

  getNameOfCategory(id): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url);
  }

  searchProduct(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`);
  }

  constructor(private http: HttpClient) { }
}
