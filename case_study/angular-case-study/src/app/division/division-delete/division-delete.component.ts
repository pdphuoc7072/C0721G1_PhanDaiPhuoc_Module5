import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DivisionService} from '../../service/division.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-division-delete',
  templateUrl: './division-delete.component.html',
  styleUrls: ['./division-delete.component.css']
})
export class DivisionDeleteComponent implements OnInit {

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

  deleteDivision(id: number) {
    this.divisionService.delete(id).subscribe(() => {
      this.router.navigate(['/division/list']);
    }, error => {
      console.log(error);
    });
  }

}
