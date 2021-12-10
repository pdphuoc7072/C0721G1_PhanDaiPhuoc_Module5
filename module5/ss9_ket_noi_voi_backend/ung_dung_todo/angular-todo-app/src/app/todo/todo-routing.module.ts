import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: TodoCreateComponent
  },
  {
    path: 'edit/:id',
    component: TodoEditComponent
  },
  {
    path: 'delete/:id',
    component: TodoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
