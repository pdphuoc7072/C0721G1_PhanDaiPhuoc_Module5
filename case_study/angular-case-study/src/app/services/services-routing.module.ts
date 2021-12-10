import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesListComponent} from './services-list/services-list.component';
import {ServicesCreateComponent} from './services-create/services-create.component';
import {ServicesEditComponent} from './services-edit/services-edit.component';
import {ServicesDeleteComponent} from './services-delete/services-delete.component';


const routes: Routes = [
  {
    path: '',
    component: ServicesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
