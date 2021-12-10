import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Position} from '../../model/position';
import {EducationDegree} from '../../model/education-degree';
import {Division} from '../../model/division';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {DivisionService} from '../../service/division.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    idCard: new FormControl(),
    salary: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    position: new FormControl(),
    educationDegree: new FormControl(),
    division: new FormControl()
  });
  id: string;
  positionList: Position[] = [];
  educationDegreeList: EducationDegree[] = [];
  divisionList: Division[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              @Inject(MAT_DIALOG_DATA) id: string,
              private matDialogRef: MatDialogRef<EmployeeDeleteComponent>,
              private matDialog: MatDialog) {
    this.id = id;
    this.getEmployee(id);
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducationDegree();
    this.getAllDivision();
  }

  getEmployee(id: string) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.employeeForm.setValue(employee);
    });
  }

  comparePosition(c1: Position, c2: Position): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareEducationDegree(c1: EducationDegree, c2: EducationDegree): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareDivision(c1: Division, c2: Division): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteEmployee(id: string) {
    const dialogConfirm = this.matDialog.open(ConfirmDeleteDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure to delete a employee with id: ' + id + ' ?'
      }
    });
    dialogConfirm.beforeClosed().subscribe(result => {
      if (result === true) {
        this.employeeService.delete(id).subscribe(() => {
          this.matDialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(positionList => {
      this.positionList = positionList;
    });
  }

  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegreeList => {
      this.educationDegreeList = educationDegreeList;
    });
  }

  getAllDivision() {
    this.divisionService.getAll().subscribe(divisionList => {
      this.divisionList = divisionList;
    });
  }
}
