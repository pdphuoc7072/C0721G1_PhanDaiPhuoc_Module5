import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentTypeRoutingModule } from './rent-type-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RentTypeListComponent } from './rent-type-list/rent-type-list.component';
import { RentTypeCreateComponent } from './rent-type-create/rent-type-create.component';
import { RentTypeEditComponent } from './rent-type-edit/rent-type-edit.component';
import { RentTypeDeleteComponent } from './rent-type-delete/rent-type-delete.component';


@NgModule({
  declarations: [RentTypeListComponent, RentTypeCreateComponent, RentTypeEditComponent, RentTypeDeleteComponent],
  imports: [
    CommonModule,
    RentTypeRoutingModule,
    ReactiveFormsModule
  ]
})
export class RentTypeModule { }
