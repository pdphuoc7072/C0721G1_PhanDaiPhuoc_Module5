import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(`${API_URL}/customerTypeList`);
  }

  save(customerType): Observable<CustomerType> {
    return this.httpClient.post<CustomerType>(`${API_URL}/customerTypeList`, customerType);
  }

  findById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(`${API_URL}/customerTypeList/${id}`);
  }

  update(id: number, customerType: CustomerType): Observable<CustomerType> {
    return this.httpClient.put<CustomerType>(`${API_URL}/customerTypeList/${id}`, customerType);
  }

  delete(id: number): Observable<CustomerType> {
    return this.httpClient.delete<CustomerType>(`${API_URL}/customerTypeList/${id}`);
  }
}
