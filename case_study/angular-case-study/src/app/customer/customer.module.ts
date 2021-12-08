import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent, CustomerDeleteComponent, CustomerDetailsComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        MatDialogModule
    ]
})
export class CustomerModule { }
