import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Brand} from '../../interfaces/brand';
import {BrandListService} from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public brandListService: BrandListService) { }

  brands: Brand[] = [];

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandListService.getBrandList().subscribe(brands => this.brands = brands);
  }

  deleteBrand(id) {
    this.brandListService.deleteBrand(id).subscribe(res => {
      // this.brands = this.brands.filter(b => b.id != id);
      // this.getBrandList();
    });
  }
}
