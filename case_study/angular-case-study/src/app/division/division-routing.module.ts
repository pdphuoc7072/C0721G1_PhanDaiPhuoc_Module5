import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DivisionListComponent} from './division-list/division-list.component';
import {DivisionCreateComponent} from './division-create/division-create.component';
import {DivisionEditComponent} from './division-edit/division-edit.component';
import {DivisionDeleteComponent} from './division-delete/division-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: DivisionListComponent
  },
  {
    path: 'create',
    component: DivisionCreateComponent
  },
  {
    path: 'edit/:id',
    component: DivisionEditComponent
  },
  {
    path: 'delete/:id',
    component: DivisionDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
