import {Component, OnInit} from '@angular/core';
import {ContractDetail} from '../../model/contract-detail';
import {ContractDetailService} from '../../service/contract-detail.service';
import {MatDialog} from '@angular/material/dialog';
import {ContractDetailDetailsComponent} from '../contract-detail-details/contract-detail-details.component';
import {ContractDetailCreateComponent} from '../contract-detail-create/contract-detail-create.component';
import {ContractDetailEditComponent} from '../contract-detail-edit/contract-detail-edit.component';
import {ContractDetailDeleteComponent} from '../contract-detail-delete/contract-detail-delete.component';

@Component({
  selector: 'app-contract-detail-list',
  templateUrl: './contract-detail-list.component.html',
  styleUrls: ['./contract-detail-list.component.css']
})
export class ContractDetailListComponent implements OnInit {

  contractDetailList: ContractDetail[] = [];

  constructor(private contractDetailService: ContractDetailService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllContractDetail();
  }

  getAllContractDetail() {
    return this.contractDetailService.getAll().subscribe(contractDetailList => {
      this.contractDetailList = contractDetailList;
    });
  }

  openDialogDetails(id) {
    const dialogDetails = this.matDialog.open(ContractDetailDetailsComponent, {data: id, height: '500px', width: '500px'});
    dialogDetails.afterClosed().subscribe(() => {
    });
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(ContractDetailCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllContractDetail();
    });
  }

  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(ContractDetailEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllContractDetail();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(ContractDetailDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllContractDetail();
    });
  }

}
