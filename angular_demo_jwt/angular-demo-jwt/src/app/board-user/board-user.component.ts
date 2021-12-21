import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(value => {
      this.content = value;
    }, error => {
      this.content = JSON.parse(error.error).message;
    });
  }

}
