import {Component, OnInit} from '@angular/core';
import {AttachService} from '../../model/attach-service';
import {AttachServiceService} from '../../service/attach-service.service';

@Component({
  selector: 'app-attach-service-list',
  templateUrl: './attach-service-list.component.html',
  styleUrls: ['./attach-service-list.component.css']
})
export class AttachServiceListComponent implements OnInit {

  attachServiceList: AttachService[] = [];

  constructor(private attachServiceService: AttachServiceService) {
  }

  ngOnInit(): void {
    this.getAllAttachService();
  }

  getAllAttachService() {
    return this.attachServiceService.getAll().subscribe(attachServiceList => {
      this.attachServiceList = attachServiceList;
    });
  }
}
