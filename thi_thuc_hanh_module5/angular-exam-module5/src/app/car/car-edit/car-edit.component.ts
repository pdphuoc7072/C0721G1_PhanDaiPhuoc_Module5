import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../model/city";
import {CarService} from "../../service/car.service";
import {CityService} from "../../service/city.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDeleteDialogComponent} from "../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carForm = new FormGroup({
    id: new FormControl(''),
    typeOfCar: new FormControl('', [Validators.required]),
    nameOfCar: new FormControl('', [Validators.required]),
    departureOfCity: new FormControl('', [Validators.required]),
    destinationOfCity: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(09)[037]([0-9]{7})$')]),
    // tslint:disable-next-line:max-line-length
    email: new FormControl('', [Validators.required, Validators.pattern('^(?:^|\\s)[\\w!#$%&\'*+/=?^`{|}~-](\\.?[\\w!#$%&\'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b$')]),
    departureOfTime: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}[:][0-9]{2}')]),
    destinationOfTime: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}[:][0-9]{2}')])
  });

  id: number;
  cities: City[] = [];

  constructor(private carService: CarService,
              private cityService: CityService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private matDialogRef: MatDialogRef<CarEditComponent>) {
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

  updateCar(id: number) {
    const car = this.carForm.value;
    this.carService.update(id, car).subscribe(() => {
      this.matDialogRef.close();
    }, error => {
      console.log(error);
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe(value => {
      this.cities = value;
    });
  }

  get typeOfCar() {
    return this.carForm.get('typeOfCar');
  }

  get nameOfCar() {
    return this.carForm.get('nameOfCar');
  }

  get departureOfCity() {
    return this.carForm.get('departureOfCity');
  }

  get destinationOfCity() {
    return this.carForm.get('destinationOfCity');
  }

  get phone() {
    return this.carForm.get('phone');
  }

  get email() {
    return this.carForm.get('email');
  }

  get departureOfTime() {
    return this.carForm.get('departureOfTime');
  }

  get destinationOfTime() {
    return this.carForm.get('destinationOfTime');
  }
}
