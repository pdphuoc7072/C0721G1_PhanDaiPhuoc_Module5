import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeCreateComponent} from '../employee-create/employee-create.component';
import {EmployeeEditComponent} from '../employee-edit/employee-edit.component';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';
import {EmployeeDetailsComponent} from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  openDialogDetails(id) {
    const dialogDetails = this.matDialog.open(EmployeeDetailsComponent, {data: id, height: '500px', width: '500px'});
    dialogDetails.afterClosed().subscribe(() => {
    });
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(EmployeeCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllEmployee();
    });
  }

  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(EmployeeEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllEmployee();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(EmployeeDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllEmployee();
    });
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe(employeeList => {
      this.employeeList = employeeList;
    });
  }

}
