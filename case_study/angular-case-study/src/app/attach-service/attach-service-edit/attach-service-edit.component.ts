import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {AttachServiceService} from '../../service/attach-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-attach-service-edit',
  templateUrl: './attach-service-edit.component.html',
  styleUrls: ['./attach-service-edit.component.css']
})
export class AttachServiceEditComponent implements OnInit {

  attachServiceForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [gte]),
    unit: new FormControl('', [gte]),
    status: new FormControl('', [Validators.required])
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

  updateAttachService(id: number) {
    const attachService = this.attachServiceForm.value;
    this.attachServiceService.update(id, attachService).subscribe(() => {
      this.router.navigate(['attach-service/list']);
    }, error => {
      console.log(error);
    });
  }

  get name() {
    return this.attachServiceForm.get('name');
  }

  get price() {
    return this.attachServiceForm.get('price');
  }

  get unit() {
    return this.attachServiceForm.get('unit');
  }

  get status() {
    return this.attachServiceForm.get('status');
  }
}
