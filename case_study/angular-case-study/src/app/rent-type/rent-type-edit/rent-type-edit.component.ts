import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-rent-type-edit',
  templateUrl: './rent-type-edit.component.html',
  styleUrls: ['./rent-type-edit.component.css']
})
export class RentTypeEditComponent implements OnInit {

  rentTypeForm: FormGroup;
  id: number;

  constructor(private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getRentType(this.id);
    });
  }

  ngOnInit(): void {
  }

  getRentType(id: number) {
    return this.rentTypeService.findById(id).subscribe(rentType => {
      this.rentTypeForm = new FormGroup({
        name: new FormControl(rentType.name),
        cost: new FormControl(rentType.cost)
      });
    });
  }

  updateRentType(id: number) {
    const rentType = this.rentTypeForm.value;
    this.rentTypeService.update(id, rentType).subscribe(() => {
      this.router.navigate(['/rent-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
