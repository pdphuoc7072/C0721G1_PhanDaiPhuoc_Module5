import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PositionListComponent} from './position-list/position-list.component';
import {PositionCreateComponent} from './position-create/position-create.component';
import {PositionEditComponent} from './position-edit/position-edit.component';
import {PositionDeleteComponent} from './position-delete/position-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: PositionListComponent
  },
  {
    path: 'create',
    component: PositionCreateComponent
  },
  {
    path: 'edit/:id',
    component: PositionEditComponent
  },
  {
    path: 'delete/:id',
    component: PositionDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
