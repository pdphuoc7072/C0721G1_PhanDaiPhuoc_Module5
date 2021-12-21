import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService,
              @Inject(MAT_DIALOG_DATA) id: string) {
    this.getEmployee(id);
  }

  ngOnInit(): void {
  }

  getEmployee(id: string) {
    this.employeeService.findById(id).subscribe(employee => {
      this.employee = employee;
    });
  }

}
