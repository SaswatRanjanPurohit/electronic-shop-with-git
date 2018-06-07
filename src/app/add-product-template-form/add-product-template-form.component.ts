import { Component, OnInit } from '@angular/core';
import { Product } from '../domain-models/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-add-product-template-form',
  templateUrl: './add-product-template-form.component.html',
  styleUrls: ['./add-product-template-form.component.css']
})
export class AddProductTemplateFormComponent implements OnInit {
  product:Product=new Product();
  productTypes=['laptop','phone'];
  formSubmitted=false;

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }
  addProduct() {
    this.productService.addProduct(this.product);
    this.formSubmitted = true;
    }

}
