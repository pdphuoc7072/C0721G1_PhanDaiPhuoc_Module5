import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContractDetail} from '../model/contract-detail';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ContractDetail[]> {
    return this.httpClient.get<ContractDetail[]>(`${API_URL}/contractDetailList`);
  }

  findById(id: number): Observable<ContractDetail> {
    return this.httpClient.get<ContractDetail>(`${API_URL}/contractDetailList/${id}`);
  }

  save(contractDetail): Observable<ContractDetail> {
    return this.httpClient.post<ContractDetail>(`${API_URL}/contractDetailList`, contractDetail);
  }

  update(id: number, contractDetail: ContractDetail): Observable<ContractDetail> {
    return this.httpClient.put<ContractDetail>(`${API_URL}/contractDetailList/${id}`, contractDetail);
  }

  delete(id: number): Observable<ContractDetail> {
    return this.httpClient.delete<ContractDetail>(`${API_URL}/contractDetailList/${id}`);
  }
}
