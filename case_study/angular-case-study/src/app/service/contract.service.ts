import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/contract';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${API_URL}/contractList`);
  }

  save(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(`${API_URL}/contractList`, contract);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${API_URL}/contractList/${id}`);
  }

  update(id: number, contract: Contract): Observable<Contract> {
    return this.httpClient.put<Contract>(`${API_URL}/contractList/${id}`, contract);
  }

  delete(id: number): Observable<Contract> {
    return this.httpClient.delete<Contract>(`${API_URL}/contractList/${id}`);
  }
}
