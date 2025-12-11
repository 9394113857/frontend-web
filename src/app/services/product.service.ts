import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://127.0.0.1:5002/api/v1/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(`${this.baseUrl}/`);
  }

  create(data: Product) {
    return this.http.post(`${this.baseUrl}/`, data);
  }

  update(id: number, data: Product) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getOne(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}

