import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent, ContractEditComponent, ContractDeleteComponent, ContractDetailsComponent],
    imports: [
        CommonModule,
        ContractRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class ContractModule { }
