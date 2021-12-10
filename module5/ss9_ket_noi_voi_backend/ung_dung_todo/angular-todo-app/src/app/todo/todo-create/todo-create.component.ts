import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todoForm = new FormGroup({
    content: new FormControl(''),
  });

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveTodo() {
    const todo = this.todoForm.value;
    console.log(todo);
    this.todoService.save(todo).subscribe(value => {
      this.router.navigate(['todo/list']);
    }, error => {
      console.log(error);
    });
  }
}
