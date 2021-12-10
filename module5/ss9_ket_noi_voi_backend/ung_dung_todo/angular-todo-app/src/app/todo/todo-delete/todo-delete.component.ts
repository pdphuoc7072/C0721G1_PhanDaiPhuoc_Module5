import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  todoForm = new FormGroup({
    content: new FormControl()
  });

  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  ngOnInit(): void {
  }

  getTodo(id: number) {
    this.todoService.findById(id).subscribe(value => {
      this.todoForm.setValue(value);
    });
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(value => {
      this.router.navigate(['todo/list']);
    });
  }

}
