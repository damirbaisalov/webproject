import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product} from '../../interfaces/product';
import {ProductListService} from '../../services/product-list.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Category} from '../../interfaces/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private productListService: ProductListService,
              private shoppingCartService: ShoppingCartService) { }

  selectedProduct: Product;
  category: Category;
  productsOfCategory: Product[];


  ngOnInit(): void {
      this.getProductList();
  }

  getProductList() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productListService.getProductByCategory(id).subscribe(ps => this.productsOfCategory = ps);
  }

  // selectedProducts: Product;
  // onSelect(product: Product): void {
  //   this.selectedProducts = product;
  // }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onAddToShopCart(product: Product): void {
    this.shoppingCartService.addProductToShopCart(product);
  }


}
