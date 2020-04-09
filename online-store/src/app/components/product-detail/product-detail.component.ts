import { Component, OnInit } from '@angular/core';

import {Product} from '../../interfaces/product';
import {ProductListService} from '../../services/product-list.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProductId: String;
  productsList: Product[];

  constructor(private route: ActivatedRoute,private productListService: ProductListService, private shopCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.getProductList()
    this.route.paramMap.subscribe(p => {
      this.selectedProductId = p.get("productsId")
    })
  }

  getProductList(): void{
    this.productListService.getProductList().subscribe(p => this.productsList = p);
  }

  onAddToCart(product: Product): void {
    this.shopCartService.addProductToShopCart(product)
  }

}
