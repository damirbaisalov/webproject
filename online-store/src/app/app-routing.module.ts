import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {FirstPageHomeComponent} from './components/first-page-home/first-page-home.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategoryDetailComponent} from './components/category-detail/category-detail.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: '', component: FirstPageHomeComponent},
  {path: 'categories', component: CategoryListComponent },
  {path: 'categories/:id', component: CategoryDetailComponent},
  {path: 'products', component: ProductListComponent },
  {path: 'products/:productsId', component: ProductDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
