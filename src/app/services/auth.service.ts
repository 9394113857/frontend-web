import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  // 🔥 FIX 1: Make Angular happy (alias method)
  getProfile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // Already exists, rename kept for consistency
  profile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  updateProfile(data: any) {
    return this.http.put(`${this.baseUrl}/update-profile`, data);
  }

  // 🔥 FIX 2: Add logout() method
  logout() {
    localStorage.removeItem("token");
    return {
      subscribe: (callback: any) => {
        callback(); // mimic observable
      }
    };
  }
}
