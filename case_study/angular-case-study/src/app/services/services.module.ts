import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesCreateComponent } from './services-create/services-create.component';
import { ServicesEditComponent } from './services-edit/services-edit.component';
import { ServicesDeleteComponent } from './services-delete/services-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {ServicesDetailsComponent} from './services-details/services-details.component';


@NgModule({
  declarations: [ServicesListComponent, ServicesCreateComponent, ServicesEditComponent, ServicesDeleteComponent, ServicesDetailsComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class ServicesModule { }
