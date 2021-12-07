import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Position} from '../model/position';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(`${API_URL}/positionList`);
  }

  save(position): Observable<Position> {
    return this.httpClient.post<Position>(`${API_URL}/positionList`, position);
  }

  findById(id: number): Observable<Position> {
    return this.httpClient.get<Position>(`${API_URL}/positionList/${id}`);
  }

  update(id: number, position: Position): Observable<Position> {
    return this.httpClient.put<Position>(`${API_URL}/positionList/${id}`, position);
  }

  delete(id: number): Observable<Position> {
    return this.httpClient.delete<Position>(`${API_URL}/positionList/${id}`);
  }
}
