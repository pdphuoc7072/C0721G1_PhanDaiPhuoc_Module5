import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ContractDetailListComponent } from './contract-detail-list/contract-detail-list.component';
import { ContractDetailCreateComponent } from './contract-detail-create/contract-detail-create.component';
import { ContractDetailEditComponent } from './contract-detail-edit/contract-detail-edit.component';
import { ContractDetailDeleteComponent } from './contract-detail-delete/contract-detail-delete.component';


@NgModule({
  declarations: [ContractDetailListComponent, ContractDetailCreateComponent, ContractDetailEditComponent, ContractDetailDeleteComponent],
  imports: [
    CommonModule,
    ContractDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractDetailModule { }
