import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationDegreeListComponent} from './education-degree-list/education-degree-list.component';
import {EducationDegreeCreateComponent} from './education-degree-create/education-degree-create.component';
import {EducationDegreeEditComponent} from './education-degree-edit/education-degree-edit.component';
import {EducationDegreeDeleteComponent} from './education-degree-delete/education-degree-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: EducationDegreeListComponent
  },
  {
    path: 'create',
    component: EducationDegreeCreateComponent
  },
  {
    path: 'edit/:id',
    component: EducationDegreeEditComponent
  },
  {
    path: 'delete/:id',
    component: EducationDegreeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationDegreeRoutingModule { }
