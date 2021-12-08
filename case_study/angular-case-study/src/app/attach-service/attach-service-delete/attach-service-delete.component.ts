import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AttachServiceService} from '../../service/attach-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-attach-service-delete',
  templateUrl: './attach-service-delete.component.html',
  styleUrls: ['./attach-service-delete.component.css']
})
export class AttachServiceDeleteComponent implements OnInit {

  attachServiceForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    unit: new FormControl(),
    status: new FormControl()
  });

  id: number;

  constructor(private attachServiceService: AttachServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getAttachService(this.id);
    });
  }

  ngOnInit(): void {
  }

  getAttachService(id: number) {
    this.attachServiceService.findById(id).subscribe(attachService => {
      this.attachServiceForm.setValue(attachService);
    });
  }

  deleteAttachService(id: number) {
    this.attachServiceService.delete(id).subscribe(() => {
      this.router.navigate(['attach-service/list']);
    }, error => {
      console.log(error);
    });
  }

}
