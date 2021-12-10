import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
              private dialog: MatDialogRef<CustomerDeleteComponent>) {
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
    this.customerService.delete(id).subscribe(() => {
      this.dialog.close();
    }, error => {
      console.log(error);
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }
}
