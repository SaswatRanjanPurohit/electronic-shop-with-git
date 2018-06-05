import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Product } from '../domain-models/product';
@Component({
  selector: 'app-add-product-model-form',
  templateUrl: './add-product-model-form.component.html',
  styleUrls: ['./add-product-model-form.component.css']
})
export class AddProductModelFormComponent implements OnInit {
  productTypes = ['laptop', 'phone'];
  myForm: FormGroup;
  title: FormControl;
  modelName: FormControl;
  color: FormControl;
  productType: FormControl;
  brand: FormControl;
  price: FormControl;
  constructor() { }

  ngOnInit() {
//     this.title = new FormControl();
// this.modelName = new FormControl();
// this.color = new FormControl();
// this.productType = new FormControl();
// this.brand = new FormControl();
// this.price = new FormControl();
this.title = new FormControl('', [Validators.required, Validators.minLength(10)]);
this.modelName = new FormControl();
this.color = new FormControl('', Validators.pattern('[a-zA-Z]*'));
this.productType = new FormControl('', Validators.required);
this.brand = new FormControl('', Validators.required);
this.price = new FormControl('', [Validators.required, Validators.min(1)]);
this.myForm = new FormGroup({
'title': this.title,
'modelName' : this.modelName,
'productType' : this.productType,
'color': this.color,
'brand': this.brand,
'price': this.price
});
  }

}
