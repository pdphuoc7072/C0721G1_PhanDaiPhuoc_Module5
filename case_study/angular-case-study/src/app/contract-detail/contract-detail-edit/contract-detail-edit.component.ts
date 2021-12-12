import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {Contract} from '../../model/contract';
import {AttachService} from '../../model/attach-service';
import {ContractDetailService} from '../../service/contract-detail.service';
import {ContractService} from '../../service/contract.service';
import {AttachServiceService} from '../../service/attach-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-detail-edit',
  templateUrl: './contract-detail-edit.component.html',
  styleUrls: ['./contract-detail-edit.component.css']
})
export class ContractDetailEditComponent implements OnInit {

  contractDetailForm = new FormGroup({
    contract: new FormControl('', [Validators.required]),
    attachService: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [gte])
  });

  id: number;
  contractList: Contract[] = [];
  attachServiceList: AttachService[] = [];

  constructor(private contractDetailService: ContractDetailService,
              private contractService: ContractService,
              private attachServiceService: AttachServiceService,
              @Inject(MAT_DIALOG_DATA) id: number,
              private matDialogRef: MatDialogRef<ContractDetailEditComponent>) {
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

  updateContractDetail(id: number) {
    const contractDetail = this.contractDetailForm.value;
    this.contractDetailService.update(id, contractDetail).subscribe(() => {
      this.matDialogRef.close();
    }, error => {
      console.log(error);
    });
  }

  get contract() {
    return this.contractDetailForm.get('contract');
  }

  get attachService() {
    return this.contractDetailForm.get('attachService');
  }

  get quantity() {
    return this.contractDetailForm.get('quantity');
  }

}
