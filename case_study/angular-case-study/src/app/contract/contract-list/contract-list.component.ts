import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {MatDialog} from '@angular/material/dialog';
import {ContractDetailsComponent} from '../contract-details/contract-details.component';
import {ContractCreateComponent} from '../contract-create/contract-create.component';
import {ContractEditComponent} from '../contract-edit/contract-edit.component';
import {ContractDeleteComponent} from '../contract-delete/contract-delete.component';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[] = [];

  p = 1;

  constructor(private contractService: ContractService,
              public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllContract();
  }

  openDialogDetails(id) {
    const dialogDetails = this.matDialog.open(ContractDetailsComponent, {data: id, height: '500px', width: '500px'});
    dialogDetails.afterClosed().subscribe(() => {
    });
  }

  openDialogCreate() {
    const dialogCreate = this.matDialog.open(ContractCreateComponent, {height: '500px', width: '500px'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getAllContract();
    });
  }

  openDialogEdit(id) {
    const dialogEdit = this.matDialog.open(ContractEditComponent, {data: id, height: '500px', width: '500px'});
    dialogEdit.afterClosed().subscribe(() => {
      this.getAllContract();
    });
  }

  openDialogDelete(id) {
    const dialogDelete = this.matDialog.open(ContractDeleteComponent, {data: id, height: '500px', width: '500px'});
    dialogDelete.afterClosed().subscribe(() => {
      this.getAllContract();
    });
  }

  getAllContract() {
    this.contractService.getAll().subscribe(contractList => {
      this.contractList = contractList;
    });
  }

}
