import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerTypeListComponent} from './customer-type-list/customer-type-list.component';
import {CustomerTypeCreateComponent} from './customer-type-create/customer-type-create.component';
import {CustomerTypeEditComponent} from './customer-type-edit/customer-type-edit.component';
import {CustomerTypeDeleteComponent} from './customer-type-delete/customer-type-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: CustomerTypeListComponent
  },
  {
    path: 'create',
    component: CustomerTypeCreateComponent
  },
  {
    path: 'edit/:id',
    component: CustomerTypeEditComponent
  },
  {
    path: 'delete/:id',
    component: CustomerTypeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTypeRoutingModule { }
