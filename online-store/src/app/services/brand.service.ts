import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Brand} from '../interfaces/brand';
// import {CategoryList} from '../data/category-list';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandListService {

  BASE_URL = 'http://127.0.0.1:8000';

  getBrandList(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.BASE_URL}/api/brands/`);
  }

  getBrand(id): Observable<Brand> {
    return this.http.get<Brand>(`${this.BASE_URL}/api/brands/${id}/`);
  }

  deleteBrand(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/brands/${id}/`);
  }

  constructor(private http: HttpClient) { }
}
