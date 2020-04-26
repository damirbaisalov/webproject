import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Category} from '../../interfaces/category';
import {CategoryListService} from '../../services/category-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor( private route: ActivatedRoute, public categoryListService: CategoryListService) { }

  categories: Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryListService.getCategoryList().subscribe(categories => this.categories = categories);
  }

  deleteCompany(id) {
    this.categoryListService.deleteСategory(id).subscribe(res => {
      // this.categories = this.categories.filter(c => c.id != id);
      // this.getCategoryList();
    });
  }
}
