import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EducationDegreeService} from '../../service/education-degree.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-education-degree-delete',
  templateUrl: './education-degree-delete.component.html',
  styleUrls: ['./education-degree-delete.component.css']
})
export class EducationDegreeDeleteComponent implements OnInit {

  educationDegreeForm: FormGroup;
  id: number;

  constructor(private educationDegreeService: EducationDegreeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getEducationDegree(this.id);
    });
  }

  ngOnInit(): void {
  }

  getEducationDegree(id: number) {
    return this.educationDegreeService.findById(id).subscribe(educationDegree => {
      this.educationDegreeForm = new FormGroup({
        name: new FormControl(educationDegree.name),
      });
    });
  }

  deleteEducationDegree(id: number) {
    this.educationDegreeService.delete(id).subscribe(() => {
      this.router.navigate(['/education-degree/list']);
    }, error => {
      console.log(error);
    });
  }

}
