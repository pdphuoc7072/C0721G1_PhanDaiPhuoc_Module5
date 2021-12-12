import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EducationDegreeService} from '../../service/education-degree.service';

@Component({
  selector: 'app-education-degree-edit',
  templateUrl: './education-degree-edit.component.html',
  styleUrls: ['./education-degree-edit.component.css']
})
export class EducationDegreeEditComponent implements OnInit {
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

  updateEducationDegree(id: number) {
    const educationDegree = this.educationDegreeForm.value;
    this.educationDegreeService.update(id, educationDegree).subscribe(() => {
      this.router.navigate(['/education-degree/list']);
    }, error => {
      console.log(error);
    });
  }

}
