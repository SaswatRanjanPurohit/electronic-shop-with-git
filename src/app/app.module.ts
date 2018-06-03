import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './service/product.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddProductModelFormComponent } from './add-product-model-form/add-product-model-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AddProductModelFormComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
