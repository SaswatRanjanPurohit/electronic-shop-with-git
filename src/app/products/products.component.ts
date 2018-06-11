// import { MockData } from '../mock-data/mock-product-data';
import { Component, OnInit } from '@angular/core';
import { Product } from '../domain-models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // constructor() { 
  //   this.products = MockData.Products;
  // }
  constructor(public productService: ProductService) {
    // this.products = productService.getProducts();
    }
   
  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
      );
  }
  deleteProduct(product:Product){
    // let index = this.products.indexOf(product);
    // if (index !== -1) {
    // this.products.splice(index, 1);
    // }
    this.productService.removeProduct(product);
    this.products = this.productService.getProducts();
  }
}
