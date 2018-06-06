import { Injectable } from '@angular/core';
import {MockData } from '../mock-data/mock-product-data';
import{ Product  } from '../domain-models/product';
@Injectable()
export class ProductService {
products : Product[]=[];
  constructor() { 
this.products=MockData.Products;
}
getProducts():Product[]{
  return this.products;
}
addProduct(product: Product) {
  this.products.push(product);
  }
removeProduct(product: Product) {
  let index = this.products.indexOf(product);
  if (index !== -1) {
  this.products.splice(index, 1);
  }
}
}