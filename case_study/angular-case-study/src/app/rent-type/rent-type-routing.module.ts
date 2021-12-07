import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RentTypeListComponent} from './rent-type-list/rent-type-list.component';
import {RentTypeCreateComponent} from './rent-type-create/rent-type-create.component';
import {RentTypeEditComponent} from './rent-type-edit/rent-type-edit.component';
import {RentTypeDeleteComponent} from './rent-type-delete/rent-type-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: RentTypeListComponent
  },
  {
    path: 'create',
    component: RentTypeCreateComponent
  },
  {
    path: 'edit/:id',
    component: RentTypeEditComponent
  },
  {
    path: 'delete/:id',
    component: RentTypeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentTypeRoutingModule { }
