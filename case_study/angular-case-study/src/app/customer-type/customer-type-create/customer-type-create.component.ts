import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-type-create',
  templateUrl: './customer-type-create.component.html',
  styleUrls: ['./customer-type-create.component.css']
})
export class CustomerTypeCreateComponent implements OnInit {

  customerTypeForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCustomerType() {
    const customerType = this.customerTypeForm.value;
    this.customerTypeService.save(customerType).subscribe(() => {
      this.router.navigate(['/customer-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
