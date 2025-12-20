import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.authUrl;

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  profile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  updateProfile(data: any) {
    return this.http.put(`${this.baseUrl}/profile`, data);
  }

  logout() {
    localStorage.removeItem('token');
    return of({ success: true });
  }
}
