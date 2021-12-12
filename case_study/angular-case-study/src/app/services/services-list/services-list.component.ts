import {Component, OnInit} from '@angular/core';
import {Services} from '../../model/services';
import {ServicesService} from '../../service/services.service';
import {MatDialog} from '@angular/material/dialog';
import {ServicesCreateComponent} from '../services-create/services-create.component';
import {ServicesEditComponent} from '../services-edit/services-edit.component';
import {ServicesDeleteComponent} from '../services-delete/services-delete.component';
import {ServicesDetailsComponent} from '../services-details/services-details.component';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  p = 1;
  servicesList: Services[] = [];

  constructor(private servicesService: ServicesService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllServices();
  }

  openDialogDetails(id) {
    const dialogDetails = this.matDialog.open(ServicesDetailsComponent, {data: id, height: '500px', width: '500px'});
    dialogDetails.afterClosed().subscribe(() => {
    });
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(ServicesCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllServices();
    });
  }

  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(ServicesEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllServices();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(ServicesDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllServices();
    });
  }

  getAllServices() {
    this.servicesService.getAll().subscribe(servicesList => {
      this.servicesList = servicesList;
    });
  }

}
