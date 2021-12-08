import {Component, OnInit} from '@angular/core';
import {ContractDetail} from '../../model/contract-detail';
import {ContractDetailService} from '../../service/contract-detail.service';

@Component({
  selector: 'app-contract-detail-list',
  templateUrl: './contract-detail-list.component.html',
  styleUrls: ['./contract-detail-list.component.css']
})
export class ContractDetailListComponent implements OnInit {

  contractDetailList: ContractDetail[] = [];

  constructor(private contractDetailService: ContractDetailService) {
  }

  ngOnInit(): void {
    this.getAllContractDetail();
  }

  getAllContractDetail() {
    return this.contractDetailService.getAll().subscribe(contractDetailList => {
      this.contractDetailList = contractDetailList;
    });
  }

}
