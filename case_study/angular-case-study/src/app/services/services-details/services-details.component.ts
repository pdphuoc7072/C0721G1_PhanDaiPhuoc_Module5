import {Component, Inject, OnInit} from '@angular/core';
import {Services} from '../../model/services';
import {ServicesService} from '../../service/services.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  services: Services;

  constructor(private servicesService: ServicesService,
              @Inject(MAT_DIALOG_DATA) id: string) {
    this.getServices(id);
  }

  ngOnInit(): void {
  }

  getServices(id: string) {
    return this.servicesService.findById(id).subscribe(value => {
      this.services = value;
    }, error => {
      console.log(error);
    });
  }

}
