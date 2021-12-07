import { Component, OnInit } from '@angular/core';
import {EducationDegree} from '../../model/education-degree';
import {EducationDegreeService} from '../../service/education-degree.service';

@Component({
  selector: 'app-education-degree-list',
  templateUrl: './education-degree-list.component.html',
  styleUrls: ['./education-degree-list.component.css']
})
export class EducationDegreeListComponent implements OnInit {
 educationDegreeList: EducationDegree[] = [];

  constructor(private educationDegreeService: EducationDegreeService) {
  }

  ngOnInit(): void {
    this.getAllEducationDegree();
  }

  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegreeList => {
      this.educationDegreeList = educationDegreeList;
    });
  }

}
