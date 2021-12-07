import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-type-edit',
  templateUrl: './customer-type-edit.component.html',
  styleUrls: ['./customer-type-edit.component.css']
})
export class CustomerTypeEditComponent implements OnInit {

  customerTypeForm: FormGroup;
  id: number;

  constructor(private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomerType(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCustomerType(id: number) {
    return this.customerTypeService.findById(id).subscribe(customerType => {
      this.customerTypeForm = new FormGroup({
        name: new FormControl(customerType.name),
      });
    });
  }

  updateCustomerType(id: number) {
    const customerType = this.customerTypeForm.value;
    this.customerTypeService.update(id, customerType).subscribe(() => {
      this.router.navigate(['/customer-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
