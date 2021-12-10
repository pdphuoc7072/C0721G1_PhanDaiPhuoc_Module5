import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {Contract} from '../../model/contract';
import {AttachService} from '../../model/attach-service';
import {ContractDetailService} from '../../service/contract-detail.service';
import {ContractService} from '../../service/contract.service';
import {AttachServiceService} from '../../service/attach-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../confirm-dialog/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-contract-detail-delete',
  templateUrl: './contract-detail-delete.component.html',
  styleUrls: ['./contract-detail-delete.component.css']
})
export class ContractDetailDeleteComponent implements OnInit {

  contractDetailForm = new FormGroup({
    contract: new FormControl(),
    attachService: new FormControl(),
    quantity: new FormControl()
  });

  id: number;
  contractList: Contract[] = [];
  attachServiceList: AttachService[] = [];

  constructor(private contractDetailService: ContractDetailService,
              private contractService: ContractService,
              private attachServiceService: AttachServiceService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private matDialogRef: MatDialogRef<ContractDetailDeleteComponent>,
              private matDialog: MatDialog) {
   this.id = id;
   this.getContractDetail(id);
  }

  ngOnInit(): void {
    this.getAllContract();
    this.getAllAttachService();
  }

  getContractDetail(id: number) {
    this.contractDetailService.findById(id).subscribe(contractDetail => {
      this.contractDetailForm.setValue(contractDetail);
    });
  }

  getAllContract() {
    this.contractService.getAll().subscribe(contractList => {
      this.contractList = contractList;
    });
  }

  getAllAttachService() {
    this.attachServiceService.getAll().subscribe(attachServiceList => {
      this.attachServiceList = attachServiceList;
    });
  }

  compareContract(c1: Contract, c2: Contract): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareAttachService(c1: AttachService, c2: AttachService): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  deleteContractDetail(id: number) {
    const dialogConfirm = this.matDialog.open(ConfirmDeleteDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure to delete a contract-detail with id: ' + id + ' ?'
      }
    });
    dialogConfirm.beforeClosed().subscribe(result => {
      if (result === true) {
        this.contractDetailService.delete(id).subscribe(() => {
          this.matDialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
