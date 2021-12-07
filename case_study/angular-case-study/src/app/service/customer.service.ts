import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${API_URL}/customerList`);
  }

  save(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${API_URL}/customerList`, customer);
  }

  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customerList/${id}`);
  }

  update(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL}/customerList/${id}`, customer);
  }

  delete(id: string): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL}/customerList/${id}`);
  }
}
