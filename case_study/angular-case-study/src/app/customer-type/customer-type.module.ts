import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTypeRoutingModule } from './customer-type-routing.module';
import { CustomerTypeListComponent } from './customer-type-list/customer-type-list.component';
import { CustomerTypeCreateComponent } from './customer-type-create/customer-type-create.component';
import { CustomerTypeEditComponent } from './customer-type-edit/customer-type-edit.component';
import { CustomerTypeDeleteComponent } from './customer-type-delete/customer-type-delete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CustomerTypeListComponent, CustomerTypeCreateComponent, CustomerTypeEditComponent, CustomerTypeDeleteComponent],
  imports: [
    CommonModule,
    CustomerTypeRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerTypeModule { }
