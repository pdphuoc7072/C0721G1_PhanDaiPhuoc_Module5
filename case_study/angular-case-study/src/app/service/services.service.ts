import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Services} from '../model/services';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Services[]> {
    return this.httpClient.get<Services[]>(`${API_URL}/servicesList`);
  }

  save(services): Observable<Services> {
    return this.httpClient.post<Services>(`${API_URL}/servicesList`, services);
  }

  findById(id: string): Observable<Services> {
    return this.httpClient.get<Services>(`${API_URL}/servicesList/${id}`);
  }

  update(id: string, services: Services): Observable<Services> {
    return this.httpClient.put<Services>(`${API_URL}/servicesList/${id}`, services);
  }

  delete(id: string): Observable<Services> {
    return this.httpClient.delete<Services>(`${API_URL}/servicesList/${id}`);
  }
}
