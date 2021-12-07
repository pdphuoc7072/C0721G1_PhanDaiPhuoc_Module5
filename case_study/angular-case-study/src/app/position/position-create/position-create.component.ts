import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-position-create',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.css']
})
export class PositionCreateComponent implements OnInit {

  positionForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private positionService: PositionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  savePosition() {
    const position = this.positionForm.value;
    this.positionService.save(position).subscribe(() => {
      this.router.navigate(['/position/list']);
    }, error => {
      console.log(error);
    });
  }
}
