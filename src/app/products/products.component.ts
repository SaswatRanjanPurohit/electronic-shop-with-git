import { MockData } from '../mock-data/mock-product-data';
import { Component, OnInit } from '@angular/core';
import { Product } from '../domain-models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor() { 
    this.products = MockData.Products;
  }
  

  ngOnInit() {
  }
}
