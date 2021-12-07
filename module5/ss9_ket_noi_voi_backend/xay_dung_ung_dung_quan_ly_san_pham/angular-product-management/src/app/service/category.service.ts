import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${API_URL}/categoryList`);
  }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post<Category>(`${API_URL}/categoryList`, category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${API_URL}/categoryList/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${API_URL}/categoryList/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${API_URL}/categoryList/${id}`);
  }
}
