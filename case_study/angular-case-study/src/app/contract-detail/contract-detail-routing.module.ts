import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractDetailListComponent} from './contract-detail-list/contract-detail-list.component';
import {ContractDetailCreateComponent} from './contract-detail-create/contract-detail-create.component';
import {ContractDetailEditComponent} from './contract-detail-edit/contract-detail-edit.component';
import {ContractDetailDeleteComponent} from './contract-detail-delete/contract-detail-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: ContractDetailListComponent
  },
  {
    path: 'create',
    component: ContractDetailCreateComponent
  },
  {
    path: 'edit/:id',
    component: ContractDetailEditComponent
  },
  {
    path: 'delete/:id',
    component: ContractDetailDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDetailRoutingModule { }
