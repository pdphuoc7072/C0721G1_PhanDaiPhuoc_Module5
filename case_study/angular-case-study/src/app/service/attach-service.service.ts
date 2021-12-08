import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/contract';
import {AttachService} from '../model/attach-service';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AttachServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<AttachService[]> {
    return this.httpClient.get<AttachService[]>(`${API_URL}/attachServiceList`);
  }

  save(attachService): Observable<AttachService> {
    return this.httpClient.post<AttachService>(`${API_URL}/attachServiceList`, attachService);
  }

  findById(id: number): Observable<AttachService> {
    return this.httpClient.get<AttachService>(`${API_URL}/attachServiceList/${id}`);
  }

  update(id: number, attachService: AttachService): Observable<AttachService> {
    return this.httpClient.put<AttachService>(`${API_URL}/attachServiceList/${id}`, attachService);
  }

  delete(id: number): Observable<AttachService> {
    return this.httpClient.delete<AttachService>(`${API_URL}/attachServiceList/${id}`);
  }
}
