import {Component, Inject, OnInit} from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract;

  constructor(private contractService: ContractService,
              @Inject(MAT_DIALOG_DATA) id: number) {
    this.getContract(id);
  }

  ngOnInit(): void {
  }

  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.contract = contract;
    });
  }
}
