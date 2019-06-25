import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl)
      .pipe(
        map((products: Product[]) => {
          const transformedProducts = [];

          products.forEach(product => {
            const p = { ...product, name: product.name.toUpperCase() };
            transformedProducts.push(p);
          });

          return transformedProducts;
        }),
        catchError((error) => {
          console.log('Raw Error:', error);
          return throwError({ errorMessage: 'Error occurred during getting a product.' });
        })
      );
  }

  getProduct(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error) => {
          console.log('Raw Error:', error);
          return throwError({ errorMessage: 'Error occurred during getting a product.' });
        })
      );
  }

  addProduct(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    // return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    // return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
