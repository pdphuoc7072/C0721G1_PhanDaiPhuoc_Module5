import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttachServiceListComponent} from './attach-service-list/attach-service-list.component';
import {AttachServiceCreateComponent} from './attach-service-create/attach-service-create.component';
import {AttachServiceEditComponent} from './attach-service-edit/attach-service-edit.component';
import {AttachServiceDeleteComponent} from './attach-service-delete/attach-service-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: AttachServiceListComponent
  },
  {
    path: 'create',
    component: AttachServiceCreateComponent
  },
  {
    path: 'edit/:id',
    component: AttachServiceEditComponent
  },
  {
    path: 'delete/:id',
    component: AttachServiceDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttachServiceRoutingModule { }
