import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionCreateComponent } from './position-create/position-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PositionEditComponent } from './position-edit/position-edit.component';
import { PositionDeleteComponent } from './position-delete/position-delete.component';


@NgModule({
  declarations: [PositionListComponent, PositionCreateComponent, PositionEditComponent, PositionDeleteComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    ReactiveFormsModule
  ]
})
export class PositionModule { }
