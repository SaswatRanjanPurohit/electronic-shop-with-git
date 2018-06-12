import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './service/product.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddProductModelFormComponent } from './add-product-model-form/add-product-model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductTemplateFormComponent } from './add-product-template-form/add-product-template-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryProductService } from '../app/service/in-memory-product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AddProductModelFormComponent,
    AddProductTemplateFormComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,AppRoutingModule, LayoutModule,HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
