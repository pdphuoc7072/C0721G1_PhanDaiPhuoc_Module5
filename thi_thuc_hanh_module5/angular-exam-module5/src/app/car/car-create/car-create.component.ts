import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../../model/city';
import {CarService} from '../../service/car.service';
import {CityService} from '../../service/city.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

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

  cities: City[] = [];

  constructor(private carService: CarService,
              private cityService: CityService,
              private dialog: MatDialogRef<CarCreateComponent>) {
  }

  ngOnInit(): void {
    this.getAllCity();
  }

  saveCar() {
    const car = this.carForm.value;
    console.log(car);
    this.carService.save(car).subscribe(() => {
      this.dialog.close();
    }, error => {
      console.log(error);
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe(value => {
      this.cities = value;
    });
  }

  get id() {
    return this.carForm.get('id');
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
