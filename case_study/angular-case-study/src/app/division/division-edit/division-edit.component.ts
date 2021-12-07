import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DivisionService} from '../../service/division.service';

@Component({
  selector: 'app-division-edit',
  templateUrl: './division-edit.component.html',
  styleUrls: ['./division-edit.component.css']
})
export class DivisionEditComponent implements OnInit {

  divisionForm: FormGroup;
  id: number;

  constructor(private divisionService: DivisionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDivision(this.id);
    });
  }

  ngOnInit(): void {
  }

  getDivision(id: number) {
    return this.divisionService.findById(id).subscribe(division => {
      this.divisionForm = new FormGroup({
        name: new FormControl(division.name),
      });
    });
  }

  updateDivision(id: number) {
    const division = this.divisionForm.value;
    this.divisionService.update(id, division).subscribe(() => {
      this.router.navigate(['/division/list']);
    }, error => {
      console.log(error);
    });
  }

}
