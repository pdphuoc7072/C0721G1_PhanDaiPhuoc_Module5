import { Component, OnInit } from '@angular/core';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-type-list',
  templateUrl: './customer-type-list.component.html',
  styleUrls: ['./customer-type-list.component.css']
})
export class CustomerTypeListComponent implements OnInit {

  customerTypeList: CustomerType[] = [];

  constructor(private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

}
