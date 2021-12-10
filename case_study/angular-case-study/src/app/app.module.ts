import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesDetailsComponent } from './services/services-details/services-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogModule} from './confirm-dialog/confirm-dialog.module';
import {ConfirmDeleteDialogComponent} from './confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ConfirmDialogModule
  ],
  entryComponents: [
    ConfirmDeleteDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
