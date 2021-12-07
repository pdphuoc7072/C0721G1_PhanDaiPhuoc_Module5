import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-position-delete',
  templateUrl: './position-delete.component.html',
  styleUrls: ['./position-delete.component.css']
})
export class PositionDeleteComponent implements OnInit {

  positionForm: FormGroup;
  id: number;

  constructor(private positionService: PositionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPosition(this.id);
    });
  }

  ngOnInit(): void {
  }

  getPosition(id: number) {
    return this.positionService.findById(id).subscribe(position => {
      this.positionForm = new FormGroup({
        name: new FormControl(position.name),
      });
    });
  }

  deletePosition(id: number) {
    this.positionService.delete(id).subscribe(() => {
      this.router.navigate(['/position/list']);
    }, error => {
      console.log(error);
    });
  }
}
