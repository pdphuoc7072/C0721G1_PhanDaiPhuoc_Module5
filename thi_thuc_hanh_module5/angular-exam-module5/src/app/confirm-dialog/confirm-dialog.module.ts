import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ConfirmDialogModule { }
