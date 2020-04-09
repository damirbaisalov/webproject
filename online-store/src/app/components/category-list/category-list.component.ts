import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {Category} from '../../interfaces/category';
import {CategoryListService} from '../../services/category-list.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor( private route: ActivatedRoute,private categoryListService: CategoryListService) { }

  categories: Category[];

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(): void {
    this.categoryListService.getCategory().subscribe(categories => this.categories = categories)
  }

  selectedCategory: Category;
  onSelect(category: Category):void{
    this.selectedCategory = category;
  }

}
