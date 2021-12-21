import {Component, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {CarService} from '../../service/car.service';
import {MatDialog} from '@angular/material/dialog';
import {CarEditComponent} from '../car-edit/car-edit.component';
import {CarDeleteComponent} from '../car-delete/car-delete.component';
import {CarCreateComponent} from '../car-create/car-create.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllCar();
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(CarCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllCar();
    });
  }
  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(CarEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllCar();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(CarDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllCar();
    });
  }

  getAllCar() {
    this.carService.getAll().subscribe(value => {
      this.cars = value;
    });
  }
}
