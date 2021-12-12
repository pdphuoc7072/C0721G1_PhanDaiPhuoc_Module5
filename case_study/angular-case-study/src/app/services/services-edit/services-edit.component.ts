import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {ServicesService} from '../../service/services.service';
import {RentTypeService} from '../../service/rent-type.service';
import {gte} from '../../util/gte.validator';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.css']
})
export class ServicesEditComponent implements OnInit {

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
  id: string;
  rentTypeList: RentType[] = [];

  constructor(private servicesService: ServicesService,
              private rentTypeService: RentTypeService,
              @Inject(MAT_DIALOG_DATA) id: string,
              private dialog: MatDialogRef<ServicesEditComponent>) {
    this.id = id;
    this.getServices(id);
  }

  ngOnInit(): void {
    this.getAllRentType();
  }

  getServices(id: string) {
    return this.servicesService.findById(id).subscribe(services => {
      this.servicesForm.setValue(services);
    });
  }

  compareRentType(c1: RentType, c2: RentType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  updateServices(id: string) {
    const services = this.servicesForm.value;
    this.servicesService.update(id, services).subscribe(() => {
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
