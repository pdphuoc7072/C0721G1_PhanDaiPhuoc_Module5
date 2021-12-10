import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {Employee} from '../../model/employee';
import {Customer} from '../../model/customer';
import {Services} from '../../model/services';
import {ContractService} from '../../service/contract.service';
import {EmployeeService} from '../../service/employee.service';
import {ServicesService} from '../../service/services.service';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contractForm = new FormGroup({
    id: new FormControl(),
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
  id: number;
  employeeList: Employee[] = [];
  customerList: Customer[] = [];
  servicesList: Services[] = [];

  constructor(private contractService: ContractService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private servicesService: ServicesService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private matDialogRef: MatDialogRef<ContractEditComponent>) {
    this.id = id;
    this.getContract(id);
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllCustomer();
    this.getAllServices();
  }

  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.contractForm.setValue(contract);
    });
  }

  compareEmployee(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCustomer(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareServices(c1: Services, c2: Services): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  updateContract(id: number) {
    const contract = this.contractForm.value;
    this.contractService.update(id, contract).subscribe(() => {
      this.matDialogRef.close();
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
