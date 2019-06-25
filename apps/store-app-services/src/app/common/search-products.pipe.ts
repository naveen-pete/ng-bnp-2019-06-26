import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    if (!searchText) {
      return products;
    }

    const filteredProducts = [];
    products.forEach((product: Product) => {
      if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
        filteredProducts.push(product);
      }
    });

    return filteredProducts;
  }

}
