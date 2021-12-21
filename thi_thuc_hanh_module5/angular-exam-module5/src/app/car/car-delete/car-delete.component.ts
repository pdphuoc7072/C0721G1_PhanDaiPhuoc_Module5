import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {City} from "../../model/city";
import {CarService} from "../../service/car.service";
import {CityService} from "../../service/city.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDeleteDialogComponent} from "../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component";

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  carForm = new FormGroup({
    id: new FormControl(),
    typeOfCar: new FormControl(),
    nameOfCar: new FormControl(),
    departureOfCity: new FormControl(),
    destinationOfCity: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    departureOfTime: new FormControl(),
    destinationOfTime: new FormControl()
  });

  id: number;
  cityList: City[] = [];

  constructor(private carService: CarService,
              private cityService: CityService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private matDialogRef: MatDialogRef<CarDeleteComponent>,
              private matDialog: MatDialog) {
    this.id = id;
    this.getCar(id);
  }

  ngOnInit(): void {
    this.getAllCity();
  }

  getCar(id: number) {
    this.carService.findById(id).subscribe(car => {
      this.carForm.setValue(car);
    });
  }

  compareCity(c1: City, c2: City): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteCar(id: number) {
    const dialogConfirm = this.matDialog.open(ConfirmDeleteDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Bạn có muốn xóa thông tin xe khách có số xe: ' + id + ' hay không ?'
      }
    });
    dialogConfirm.beforeClosed().subscribe(result => {
      if (result === true) {
        this.carService.delete(id).subscribe(() => {
          this.matDialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe(cityList => {
      this.cityList = cityList;
    });
  }

}
