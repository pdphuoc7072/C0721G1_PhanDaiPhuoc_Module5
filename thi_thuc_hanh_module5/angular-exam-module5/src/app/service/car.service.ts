import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/car';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${API_URL}/api/cars`);
  }

  findById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${API_URL}/api/cars/${id}`);
  }

  save(car): Observable<Car> {
    return this.httpClient.post<Car>(`${API_URL}/api/cars`, car);
  }

  update(id: number, car: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${API_URL}/api/cars/${id}`, car);
  }

  delete(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(`${API_URL}/api/cars/${id}`);
  }
}
