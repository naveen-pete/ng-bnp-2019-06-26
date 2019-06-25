import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      name: 'Samsung Galaxy S10',
      description: 'Description about Galaxy S10',
      price: 60000,
      isAvailable: true
    },
    {
      name: 'iPhone X',
      description: 'Description about iPhone X',
      price: 80000,
      isAvailable: true
    },
    {
      name: 'Asus Zenfone 6',
      description: 'Description about Zenfone',
      price: 35000,
      isAvailable: false
    }
  ];

  constructor(private loggerService: LoggerService) { }

  // Products Component
  getProducts() {
    this.loggerService.log('ProductsService.getProducts() called.');
    return this.products;
    // access the server
  }

  // Product Form Component
  addProduct(product: Product) {
    this.products.unshift(product);
    this.loggerService.log('ProductsService.addProduct(): New product added.');
  }
}
