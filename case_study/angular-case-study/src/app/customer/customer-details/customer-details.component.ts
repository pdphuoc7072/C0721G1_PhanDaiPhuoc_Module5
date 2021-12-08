import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService,
              @Inject(MAT_DIALOG_DATA) id: string) {
    this.getCustomer(id);
  }

  ngOnInit(): void {
  }

  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customer = customer;
    });
  }
}
