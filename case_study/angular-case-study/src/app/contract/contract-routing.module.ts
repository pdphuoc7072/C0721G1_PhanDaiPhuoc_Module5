import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractEditComponent} from './contract-edit/contract-edit.component';
import {ContractDeleteComponent} from './contract-delete/contract-delete.component';

const routes: Routes = [
  {
    path: '',
    component: ContractListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
