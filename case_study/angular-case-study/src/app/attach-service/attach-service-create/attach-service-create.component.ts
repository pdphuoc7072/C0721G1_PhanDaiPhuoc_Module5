import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {AttachServiceService} from '../../service/attach-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-attach-service-create',
  templateUrl: './attach-service-create.component.html',
  styleUrls: ['./attach-service-create.component.css']
})
export class AttachServiceCreateComponent implements OnInit {

  attachServiceForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [gte]),
    unit: new FormControl('', [gte]),
    status: new FormControl('', [Validators.required])
  });

  constructor(private attachServiceService: AttachServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveAttachService() {
    const attachService = this.attachServiceForm.value;
    this.attachServiceService.save(attachService).subscribe(() => {
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
