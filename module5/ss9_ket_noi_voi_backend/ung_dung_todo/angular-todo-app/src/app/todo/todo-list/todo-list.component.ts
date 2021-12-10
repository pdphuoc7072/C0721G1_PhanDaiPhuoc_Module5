import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAll().subscribe(value => {
      this.todoList = value;
    }, error => {
      console.log(error);
    });
  }

  completeTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
  }
}
