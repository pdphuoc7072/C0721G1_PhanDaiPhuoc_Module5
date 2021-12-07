import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-rent-type-create',
  templateUrl: './rent-type-create.component.html',
  styleUrls: ['./rent-type-create.component.css']
})
export class RentTypeCreateComponent implements OnInit {

  rentTypeForm = new FormGroup({
    name: new FormControl(),
    cost: new FormControl()
  });

  constructor(private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveRentType() {
    const rentType = this.rentTypeForm.value;
    this.rentTypeService.save(rentType).subscribe(() => {
      this.router.navigate(['/rent-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
