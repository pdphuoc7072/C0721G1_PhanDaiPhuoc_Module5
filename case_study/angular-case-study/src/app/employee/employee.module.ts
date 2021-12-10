import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeEditComponent, EmployeeDeleteComponent, EmployeeDetailsComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        NgxPaginationModule
    ]
})
export class EmployeeModule { }
