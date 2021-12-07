import {Component, OnInit} from '@angular/core';
import {PositionService} from '../../service/position.service';
import {Position} from '../../model/position';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
  positionList: Position[] = [];

  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.getAllPosition();
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(positionList => {
      this.positionList = positionList;
    });
  }
}
