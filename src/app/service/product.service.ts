import { Injectable } from '@angular/core';
import {MockData } from '../mock-data/mock-product-data';
import{ Product } from '../domain-models/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class ProductService {
products : Product[]=[];
  constructor() { 
this.products=MockData.Products;
}
// getProducts():Product[]{
//   return this.products;
// }
getProducts(): Observable<Product[]> {
  return of(this.products);
}
addProduct(product: Product) {
  this.products.push(product);
  }
  getProduct(id: number): Observable<Product> {
    return of(this.products.find( p => p.id === id));
    }
removeProduct(product: Product) {
  let index = this.products.indexOf(product);
  if (index !== -1) {
  this.products.splice(index, 1);
  }
}
// getProduct(id: number) {
//   return this.products.find( p => p.id === id);
//   }

}