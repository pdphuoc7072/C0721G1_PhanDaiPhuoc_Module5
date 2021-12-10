import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${API_URL}/employeeList`);
  }

  save(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${API_URL}/employeeList`, employee);
  }

  findById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${API_URL}/employeeList/${id}`);
  }

  update(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${API_URL}/employeeList/${id}`, employee);
  }

  delete(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${API_URL}/employeeList/${id}`);
  }

  search(employee: any): Observable<Employee[]> {
    if (employee.positionSearch === '') {
      return this.httpClient.get<Employee[]>(`${API_URL}/employeeList?name_like=${employee.nameSearch}&phone_like=${employee.phoneSearch}`);
    } else {
      // tslint:disable-next-line:max-line-length
      return this.httpClient.get<Employee[]>(`${API_URL}/employeeList?name_like=${employee.nameSearch}&phone_like=${employee.phoneSearch}&position.id=${employee.positionSearch.id}`);
    }
  }
}
