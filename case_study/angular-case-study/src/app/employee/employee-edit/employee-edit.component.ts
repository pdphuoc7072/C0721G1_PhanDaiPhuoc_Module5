import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Position} from '../../model/position';
import {EducationDegree} from '../../model/education-degree';
import {Division} from '../../model/division';
import {EmployeeService} from '../../service/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PositionService} from '../../service/position.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {DivisionService} from '../../service/division.service';
import {gte} from '../../util/gte.validator';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
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
        name: new FormControl(employee.name, [Validators.required]),
        // tslint:disable-next-line:max-line-length
        dateOfBirth: new FormControl(employee.dateOfBirth, [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
        idCard: new FormControl(employee.idCard, [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
        salary: new FormControl(employee.salary, [gte]),
        phone: new FormControl(employee.phone, [Validators.required, Validators.pattern('^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$')]),
        // tslint:disable-next-line:max-line-length
        email: new FormControl(employee.email, [Validators.required, Validators.pattern('^(?:^|\\s)[\\w!#$%&\'*+/=?^`{|}~-](\\.?[\\w!#$%&\'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b$')]),
        address: new FormControl(employee.address, [Validators.required]),
        position: new FormControl(employee.position, [Validators.required]),
        educationDegree: new FormControl(employee.educationDegree, [Validators.required]),
        division: new FormControl(employee.division, [Validators.required])
      });
    });
  }

  updateEmployee(id: string) {
    const employee = this.employeeForm.value;
    this.employeeService.update(id, employee).subscribe(() => {
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

  get name() {
    return this.employeeForm.get('name');
  }

  get dateOfBirth() {
    return this.employeeForm.get('dateOfBirth');
  }

  get idCard() {
    return this.employeeForm.get('idCard');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get educationDegree() {
    return this.employeeForm.get('educationDegree');
  }

  get division() {
    return this.employeeForm.get('division');
  }
}
