import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../model/division';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Division[]> {
    return this.httpClient.get<Division[]>(`${API_URL}/divisionList`);
  }

  save(division): Observable<Division> {
    return this.httpClient.post<Division>(`${API_URL}/divisionList`, division);
  }

  findById(id: number): Observable<Division> {
    return this.httpClient.get<Division>(`${API_URL}/divisionList/${id}`);
  }

  update(id: number, division: Division): Observable<Division> {
    return this.httpClient.put<Division>(`${API_URL}/divisionList/${id}`, division);
  }

  delete(id: number): Observable<Division> {
    return this.httpClient.delete<Division>(`${API_URL}/divisionList/${id}`);
  }
}
