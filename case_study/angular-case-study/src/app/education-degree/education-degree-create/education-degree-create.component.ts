import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';
import {EducationDegreeService} from '../../service/education-degree.service';

@Component({
  selector: 'app-education-degree-create',
  templateUrl: './education-degree-create.component.html',
  styleUrls: ['./education-degree-create.component.css']
})
export class EducationDegreeCreateComponent implements OnInit {

  educationDegreeForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private educationDegreeService: EducationDegreeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveEducationDegree() {
    const educationDegree = this.educationDegreeForm.value;
    this.educationDegreeService.save(educationDegree).subscribe(() => {
      this.router.navigate(['/education-degree/list']);
    }, error => {
      console.log(error);
    });
  }

}
