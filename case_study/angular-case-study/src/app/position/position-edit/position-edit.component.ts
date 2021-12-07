import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {

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

  updatePosition(id: number) {
    const position = this.positionForm.value;
    this.positionService.update(id, position).subscribe(() => {
      this.router.navigate(['/position/list']);
    }, error => {
      console.log(error);
    });
  }
}
