import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../interfaces/category';
// import {CategoryList} from '../data/category-list';
import { HttpClient} from '@angular/common/http';
import {LoginResponse} from '../interfaces/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  // categories = CategoryList;
  BASE_URL = 'http://127.0.0.1:8000';


  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  deleteСategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/categories/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  constructor(private http: HttpClient) { }
}
