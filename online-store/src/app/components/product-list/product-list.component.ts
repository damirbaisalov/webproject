import { Component, OnInit } from '@angular/core';

import {Product} from '../../interfaces/product';
import {Category} from '../../interfaces/category';
import {ProductListService} from '../../services/product-list.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {CategoryListService} from '../../services/category-list.service';
import {ActivatedRoute} from "@angular/router";
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(private route: ActivatedRoute, private productListService: ProductListService, private shopCartService: ShoppingCartService, private categoryListService: CategoryListService) { }

  productsList: Product[];
  products: Product[];
  categories: Category[];
  isSort: Boolean;

  ngOnInit(): void {
    this.getProductList()
    this.getCategories()
    this.getListOfProducts()
  }

  selectedProduct: Product;

  getCategories() {
      this.categoryListService.getCategory().subscribe(c => this.categories = c);
  }
  getListOfProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productListService.getProductByCategory(id).subscribe(p => this.products = p);
  }
///////
  getProductList(): void {
    this.productListService.getProductList().subscribe( c => this.productsList = c)
  }

  onAddToShopCart(product: Product): void {
    this.shopCartService.addProductToShopCart(product)
  }

  onSelect(product:Product): void{
    this.selectedProduct = product;
  }
  onSortByPrice(){
      
  }
}
