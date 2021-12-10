import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });
  id: string;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              @Inject(MAT_DIALOG_DATA) id: string,
              private matDialogRef: MatDialogRef<CustomerDeleteComponent>,
              private matDialog: MatDialog) {
    this.id = id;
    this.getCustomer(id);
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm.setValue(customer);
    });
  }

  compareCustomerType(c1: CustomerType, c2: CustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteCustomer(id: string) {
    const dialogConfirm = this.matDialog.open(ConfirmDeleteDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure to delete a customer with id: ' + id + ' ?'
      }
    });
    dialogConfirm.beforeClosed().subscribe(result => {
      if (result === true) {
        this.customerService.delete(id).subscribe(() => {
          this.matDialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }
}
