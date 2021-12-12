import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {ServicesService} from '../../service/services.service';
import {RentTypeService} from '../../service/rent-type.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-services-delete',
  templateUrl: './services-delete.component.html',
  styleUrls: ['./services-delete.component.css']
})
export class ServicesDeleteComponent implements OnInit {

  servicesForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    floor: new FormControl(),
    maxPeople: new FormControl(),
    cost: new FormControl(),
    status: new FormControl(),
    rentType: new FormControl()
  });
  id: string;
  rentTypeList: RentType[] = [];

  constructor(private servicesService: ServicesService,
              private rentTypeService: RentTypeService,
              @Inject(MAT_DIALOG_DATA) id: string,
              private matDialogRef: MatDialogRef<ServicesDeleteComponent>,
              private matDialog: MatDialog) {
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

  deleteServices(id: string) {
    const dialogConfirm = this.matDialog.open(ConfirmDeleteDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure to delete a services with id: ' + id + ' ?'
      }
    });
    dialogConfirm.beforeClosed().subscribe(result => {
      if (result === true) {
        this.servicesService.delete(id).subscribe(() => {
          this.matDialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

}
