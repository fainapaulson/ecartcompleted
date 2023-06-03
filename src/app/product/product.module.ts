import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ViewAllComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
