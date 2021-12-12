import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerCreateComponent} from '../customer-create/customer-create.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];

  p = 1;

  constructor(private customerService: CustomerService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  openDialogDetails(id) {
    const dialogDetails = this.matDialog.open(CustomerDetailsComponent, {data: id, height: '500px', width: '500px'});
    dialogDetails.afterClosed().subscribe(() => {
    });
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(CustomerCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllCustomer();
    });
  }

  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(CustomerEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllCustomer();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(CustomerDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllCustomer();
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    });
  }

}
