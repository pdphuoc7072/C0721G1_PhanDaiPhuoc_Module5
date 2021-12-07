import { Component, OnInit } from '@angular/core';
import {DivisionService} from '../../service/division.service';
import {Division} from '../../model/division';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.css']
})
export class DivisionListComponent implements OnInit {

  divisionList: Division[] = [];

  constructor(private divisionService: DivisionService) {
  }

  ngOnInit(): void {
    this.getAllDivision();
  }

  getAllDivision() {
    this.divisionService.getAll().subscribe(divisionList => {
      this.divisionList = divisionList;
    });
  }

}
