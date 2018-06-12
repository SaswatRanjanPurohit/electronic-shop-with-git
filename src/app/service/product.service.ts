import { Injectable } from '@angular/core';
import {MockData } from '../mock-data/mock-product-data';
import{ Product } from '../domain-models/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
products : Product[]=[];
productsUrl = 'api/products';
  constructor(private httpClient: HttpClient) { 
this.products=MockData.Products;
}
// getProducts():Product[]{
//   return this.products;
// }
// getProducts(): Observable<Product[]> {
//   return of(this.products);
// }
getProducts(): Observable<Product[]> {
  return this.httpClient.get<Product[]>(this.productsUrl);
  .pipe(
    catchError(this.handleError('getProducts', []))
    );
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