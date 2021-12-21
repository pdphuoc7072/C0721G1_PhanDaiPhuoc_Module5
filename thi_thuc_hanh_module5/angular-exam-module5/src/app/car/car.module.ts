import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { CarCreateComponent } from './car-create/car-create.component';


@NgModule({
  declarations: [CarListComponent, CarEditComponent, CarDeleteComponent, CarCreateComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class CarModule { }
