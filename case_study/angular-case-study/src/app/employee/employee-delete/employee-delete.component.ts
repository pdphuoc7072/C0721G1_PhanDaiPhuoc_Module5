import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Position} from '../../model/position';
import {EducationDegree} from '../../model/education-degree';
import {Division} from '../../model/division';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {DivisionService} from '../../service/division.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employeeForm: FormGroup;
  id: string;
  positionList: Position[] = [];
  educationDegreeList: EducationDegree[] = [];
  divisionList: Division[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getEmployee(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducationDegree();
    this.getAllDivision();
  }

  getEmployee(id: string) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.employeeForm = new FormGroup({
        id: new FormControl(employee.id),
        name: new FormControl(employee.name),
        dateOfBirth: new FormControl(employee.dateOfBirth),
        idCard: new FormControl(employee.idCard),
        salary: new FormControl(employee.salary),
        phone: new FormControl(employee.phone),
        email: new FormControl(employee.email),
        address: new FormControl(employee.address),
        position: new FormControl(employee.position),
        educationDegree: new FormControl(employee.educationDegree),
        division: new FormControl(employee.division)
      });
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.delete(id).subscribe(() => {
      this.router.navigate(['/employee/list']);
    }, error => {
      console.log(error);
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
