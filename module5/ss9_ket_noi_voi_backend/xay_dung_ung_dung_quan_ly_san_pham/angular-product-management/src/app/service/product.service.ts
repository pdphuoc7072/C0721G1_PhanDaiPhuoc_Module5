import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/productList/${id}`);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/productList`);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(`${API_URL}/productList`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${API_URL}/productList/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL}/productList/${id}`);
  }
}
