import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationDegreeRoutingModule } from './education-degree-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { EducationDegreeListComponent } from './education-degree-list/education-degree-list.component';
import { EducationDegreeCreateComponent } from './education-degree-create/education-degree-create.component';
import { EducationDegreeEditComponent } from './education-degree-edit/education-degree-edit.component';
import { EducationDegreeDeleteComponent } from './education-degree-delete/education-degree-delete.component';


@NgModule({
  declarations: [EducationDegreeListComponent, EducationDegreeCreateComponent, EducationDegreeEditComponent, EducationDegreeDeleteComponent],
  imports: [
    CommonModule,
    EducationDegreeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EducationDegreeModule { }
