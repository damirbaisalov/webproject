import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Category} from '../interfaces/category';
import {CategoryList} from '../data/category-list';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  categories = CategoryList

  getCategory(): Observable<Category[]> {
    return of(CategoryList);
  }

  constructor() { }
}
