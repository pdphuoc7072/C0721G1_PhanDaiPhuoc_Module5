import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(value => {
      this.content = value;
    }, error => {
      this.content = JSON.parse(error.error).message;
    });
  }

}
