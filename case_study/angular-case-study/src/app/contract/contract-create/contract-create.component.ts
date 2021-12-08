import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {gte} from '../../util/gte.validator';
import {Customer} from '../../model/customer';
import {Employee} from '../../model/employee';
import {Services} from '../../model/services';
import {ContractService} from '../../service/contract.service';
import {EmployeeService} from '../../service/employee.service';
import {ServicesService} from '../../service/services.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractForm = new FormGroup({
    // tslint:disable-next-line:max-line-length
    startDate: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    // tslint:disable-next-line:max-line-length
    endDate: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    deposit: new FormControl('', [gte]),
    total: new FormControl('', [gte]),
    employee: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    services: new FormControl('', [Validators.required])
  });

  employeeList: Employee[] = [];
  customerList: Customer[] = [];
  servicesList: Services[] = [];

  constructor(private contractService: ContractService,
              private employeeService: EmployeeService,
              private servicesService: ServicesService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllCustomer();
    this.getAllServices();
  }

  saveContract() {
    const contract = this.contractForm.value;
    this.contractService.save(contract).subscribe(() => {
    }, error => {
      console.log(error);
    });
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe(employeeList => {
      this.employeeList = employeeList;
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  getAllServices() {
    this.servicesService.getAll().subscribe(servicesList => {
      this.servicesList = servicesList;
    });
  }

  get startDate() {
    return this.contractForm.get('startDate');
  }

  get endDate() {
    return this.contractForm.get('endDate');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }

  get total() {
    return this.contractForm.get('total');
  }

  get employee() {
    return this.contractForm.get('employee');
  }

  get customer() {
    return this.contractForm.get('customer');
  }

  get services() {
    return this.contractForm.get('services');
  }
}
