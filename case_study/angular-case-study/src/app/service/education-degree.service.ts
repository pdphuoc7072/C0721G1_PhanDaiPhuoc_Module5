import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EducationDegree} from '../model/education-degree';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<EducationDegree[]> {
    return this.httpClient.get<EducationDegree[]>(`${API_URL}/educationDegreeList`);
  }

  save(educationDegree): Observable<EducationDegree> {
    return this.httpClient.post<EducationDegree>(`${API_URL}/educationDegreeList`, educationDegree);
  }

  findById(id: number): Observable<EducationDegree> {
    return this.httpClient.get<EducationDegree>(`${API_URL}/educationDegreeList/${id}`);
  }

  update(id: number, educationDegree: EducationDegree): Observable<EducationDegree> {
    return this.httpClient.put<EducationDegree>(`${API_URL}/educationDegreeList/${id}`, educationDegree);
  }

  delete(id: number): Observable<EducationDegree> {
    return this.httpClient.delete<EducationDegree>(`${API_URL}/educationDegreeList/${id}`);
  }
}
