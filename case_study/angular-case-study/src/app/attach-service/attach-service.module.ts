import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttachServiceRoutingModule } from './attach-service-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AttachServiceListComponent } from './attach-service-list/attach-service-list.component';
import { AttachServiceCreateComponent } from './attach-service-create/attach-service-create.component';
import { AttachServiceEditComponent } from './attach-service-edit/attach-service-edit.component';
import { AttachServiceDeleteComponent } from './attach-service-delete/attach-service-delete.component';


@NgModule({
  declarations: [AttachServiceListComponent, AttachServiceCreateComponent, AttachServiceEditComponent, AttachServiceDeleteComponent],
  imports: [
    CommonModule,
    AttachServiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class AttachServiceModule { }
