import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../interfaces/category';
// import {CategoryList} from '../data/category-list';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  // categories = CategoryList;
  private categoriesUrl = 'api/categories';


  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  constructor(private http: HttpClient) { }
}
