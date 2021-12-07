import { Component, OnInit } from '@angular/core';
import {RentType} from '../../model/rent-type';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-rent-type-list',
  templateUrl: './rent-type-list.component.html',
  styleUrls: ['./rent-type-list.component.css']
})
export class RentTypeListComponent implements OnInit {

  rentTypeList: RentType[] = [];

  constructor(private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.getAllRentType();
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

}
