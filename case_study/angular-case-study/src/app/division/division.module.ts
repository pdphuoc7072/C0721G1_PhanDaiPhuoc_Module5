import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DivisionListComponent } from './division-list/division-list.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { DivisionEditComponent } from './division-edit/division-edit.component';
import { DivisionDeleteComponent } from './division-delete/division-delete.component';


@NgModule({
  declarations: [DivisionListComponent, DivisionCreateComponent, DivisionEditComponent, DivisionDeleteComponent],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    ReactiveFormsModule
  ]
})
export class DivisionModule { }
