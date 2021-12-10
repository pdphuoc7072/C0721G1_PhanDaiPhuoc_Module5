import {Component, Inject, OnInit} from '@angular/core';
import {ContractDetail} from '../../model/contract-detail';
import {ContractDetailService} from '../../service/contract-detail.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contract-detail-details',
  templateUrl: './contract-detail-details.component.html',
  styleUrls: ['./contract-detail-details.component.css']
})
export class ContractDetailDetailsComponent implements OnInit {

  contractDetail: ContractDetail;

  constructor(private contractDetailService: ContractDetailService,
              @Inject(MAT_DIALOG_DATA) id: number) {
    this.getContractDetail(id);
  }

  ngOnInit(): void {
  }

  getContractDetail(id: number) {
    this.contractDetailService.findById(id).subscribe(value => {
      this.contractDetail = value;
    });
  }
}
