import { Component, OnInit } from '@angular/core';
import {Services} from '../../model/services';
import {ServicesService} from '../../service/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  servicesList: Services[] = [];

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.servicesService.getAll().subscribe(servicesList => {
      this.servicesList = servicesList;
    });
  }

}
