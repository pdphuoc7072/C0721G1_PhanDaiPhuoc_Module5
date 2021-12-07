import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RentTypeService} from '../../service/rent-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-rent-type-delete',
  templateUrl: './rent-type-delete.component.html',
  styleUrls: ['./rent-type-delete.component.css']
})
export class RentTypeDeleteComponent implements OnInit {

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

  deleteRentType(id: number) {
    this.rentTypeService.delete(id).subscribe(() => {
      this.router.navigate(['/rent-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
