import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../util/gte.validator';
import {ContractDetailService} from '../../service/contract-detail.service';
import {ContractService} from '../../service/contract.service';
import {AttachServiceService} from '../../service/attach-service.service';
import {Router} from '@angular/router';
import {Contract} from '../../model/contract';
import {AttachService} from '../../model/attach-service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-detail-create',
  templateUrl: './contract-detail-create.component.html',
  styleUrls: ['./contract-detail-create.component.css']
})
export class ContractDetailCreateComponent implements OnInit {

  contractDetailForm = new FormGroup({
    contract: new FormControl('', [Validators.required]),
    attachService: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [gte])
  });

  contractList: Contract[] = [];
  attachServiceList: AttachService[] = [];

  constructor(private contractDetailService: ContractDetailService,
              private contractService: ContractService,
              private attachServiceService: AttachServiceService,
              private matDialogRef: MatDialogRef<ContractDetailCreateComponent>) {
  }

  ngOnInit(): void {
    this.getAllContract();
    this.getAllAttachService();
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

  saveContractDetail() {
    const contractDetail = this.contractDetailForm.value;
    this.contractDetailService.save(contractDetail).subscribe(() => {
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
