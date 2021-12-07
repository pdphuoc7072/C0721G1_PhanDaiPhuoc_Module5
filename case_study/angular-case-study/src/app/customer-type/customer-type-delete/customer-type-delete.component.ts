import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-type-delete',
  templateUrl: './customer-type-delete.component.html',
  styleUrls: ['./customer-type-delete.component.css']
})
export class CustomerTypeDeleteComponent implements OnInit {

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

  deleteCustomerType(id: number) {
    this.customerTypeService.delete(id).subscribe(() => {
      this.router.navigate(['/customer-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
