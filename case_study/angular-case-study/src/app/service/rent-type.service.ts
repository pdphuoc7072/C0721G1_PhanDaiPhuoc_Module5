import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentType} from '../model/rent-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(`${API_URL}/rentTypeList`);
  }

  save(rentType): Observable<RentType> {
    return this.httpClient.post<RentType>(`${API_URL}/rentTypeList`, rentType);
  }

  findById(id: number): Observable<RentType> {
    return this.httpClient.get<RentType>(`${API_URL}/rentTypeList/${id}`);
  }

  update(id: number, rentType: RentType): Observable<RentType> {
    return this.httpClient.put<RentType>(`${API_URL}/rentTypeList/${id}`, rentType);
  }

  delete(id: number): Observable<RentType> {
    return this.httpClient.delete<RentType>(`${API_URL}/rentTypeList/${id}`);
  }
}
