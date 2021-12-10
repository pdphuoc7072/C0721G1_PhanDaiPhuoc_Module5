import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesCreateComponent } from './services-create/services-create.component';
import { ServicesEditComponent } from './services-edit/services-edit.component';
import { ServicesDeleteComponent } from './services-delete/services-delete.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ServicesListComponent, ServicesCreateComponent, ServicesEditComponent, ServicesDeleteComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class ServicesModule { }
