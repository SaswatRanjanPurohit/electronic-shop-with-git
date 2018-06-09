import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { AddProductModelFormComponent } from '../app/add-product-model-form/add-product-model-form.component';
import { AddProductTemplateFormComponent } from '../app/add-product-template-form/add-product-template-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'add-product-template-form', component : AddProductTemplateFormComponent },
  {path: 'add-product-model-form', component: AddProductModelFormComponent}
  ];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
