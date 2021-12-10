import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';


@NgModule({
  declarations: [TodoCreateComponent, TodoEditComponent, TodoDeleteComponent],
    imports: [
        CommonModule,
        TodoRoutingModule,
        ReactiveFormsModule
    ]
})
export class TodoModule { }
