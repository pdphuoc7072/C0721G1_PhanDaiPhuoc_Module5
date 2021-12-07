import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';
import {DivisionService} from '../../service/division.service';

@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.css']
})
export class DivisionCreateComponent implements OnInit {

  divisionForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private divisionService: DivisionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveDivision() {
    const division = this.divisionForm.value;
    this.divisionService.save(division).subscribe(() => {
      this.router.navigate(['/division/list']);
    }, error => {
      console.log(error);
    });
  }

}
