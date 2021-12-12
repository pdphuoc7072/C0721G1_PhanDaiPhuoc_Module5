import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {RentType} from '../../model/rent-type';
import {ServicesService} from '../../service/services.service';
import {RentTypeService} from '../../service/rent-type.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.css']
})
export class ServicesCreateComponent implements OnInit {

  servicesForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [gte]),
    floor: new FormControl('', [gte]),
    maxPeople: new FormControl('', [gte]),
    cost: new FormControl('', [gte]),
    status: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required])
  });

  rentTypeList: RentType[] = [];

  constructor(private servicesService: ServicesService,
              private rentTypeService: RentTypeService,
              private dialog: MatDialogRef<ServicesCreateComponent>) {
  }

  ngOnInit(): void {
    this.getAllRentType();
  }

  saveServices() {
    const services = this.servicesForm.value;
    this.servicesService.save(services).subscribe(() => {
      this.dialog.close();
    }, error => {
      console.log(error);
    });
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  get id() {
    return this.servicesForm.get('id');
  }

  get name() {
    return this.servicesForm.get('name');
  }

  get area() {
    return this.servicesForm.get('area');
  }

  get floor() {
    return this.servicesForm.get('floor');
  }

  get maxPeople() {
    return this.servicesForm.get('maxPeople');
  }

  get cost() {
    return this.servicesForm.get('cost');
  }

  get status() {
    return this.servicesForm.get('status');
  }

  get rentType() {
    return this.servicesForm.get('rentType');
  }

}
