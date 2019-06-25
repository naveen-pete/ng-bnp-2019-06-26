import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }
}

// built-in (html)
// <input [value]="productName" >

// custom (angular)
// <app-product-detail [product]="p" ></app-product-detail>
