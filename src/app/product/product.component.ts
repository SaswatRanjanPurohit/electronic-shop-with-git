import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Product } from '../domain-models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product: Product;
  @Input() product: Product;
  @Output() removed = new EventEmitter<Product>();
  constructor() { }
  ngOnInit() {
  }
  delete(){
    this.removed.emit(this.product);
  }

}
