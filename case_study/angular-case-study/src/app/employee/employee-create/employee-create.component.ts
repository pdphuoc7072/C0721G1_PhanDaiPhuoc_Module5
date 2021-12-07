import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EducationDegree} from '../../model/education-degree';
import {Division} from '../../model/division';
import {Position} from '../../model/position';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {DivisionService} from '../../service/division.service';
import {Router} from '@angular/router';
import {gte} from '../../util/gte.validator';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^(NV-)(\\d{4})$')]),
    name: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    dateOfBirth: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
    salary: new FormControl('', [gte]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$')]),
    // tslint:disable-next-line:max-line-length
    email: new FormControl('', [Validators.required, Validators.pattern('^(?:^|\\s)[\\w!#$%&\'*+/=?^`{|}~-](\\.?[\\w!#$%&\'*+/=?^`{|}~-]+)*@\\w+[.-]?\\w*\\.[a-zA-Z]{2,3}\\b$')]),
    address: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    educationDegree: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required])
  });

  positionList: Position[] = [];
  educationDegreeList: EducationDegree[] = [];
  divisionList: Division[] = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationDegreeService: EducationDegreeService,
              private divisionService: DivisionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducationDegree();
    this.getAllDivision();
  }

  saveEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.save(employee).subscribe(() => {
      this.router.navigate(['employee/list']);
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

  get id() {
    return this.employeeForm.get('id');
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
