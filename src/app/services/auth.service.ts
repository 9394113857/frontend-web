import { Injectable } from '@angular/core';  // src/app/services/auth.service.ts // Default import added by Angular CLI is used to define an injectable service
import { HttpClient } from '@angular/common/http'; //  HttpClient import added by Angular CLI is uded for making HTTP requests
import { environment } from 'src/environments/environment'; // src/environments/environment.ts import is used to access environment-specific variables like API base URLs

// Decorator to define a service that can be injected into other components or services like AuthService is used for managing user authentication like login, registration, profile management, and logout.
@Injectable({
  providedIn: 'root'
})

// AuthService is decorated with @Injectable to make it available for dependency injection 
// throughout the app means it can be injected into components 
// and other services as needed, becasuse it is provided in 'root' , 
// it is a singleton service for example only one instance of AuthService will be created 
// and shared across the entire application like for managing user authentication state globally.

export class AuthService { // AuthService class is defined to handle all authentication-related operations

  // Base URL for all auth API requests lke register, login, profile management, and logout:-
  private baseUrl = environment.baseUrl;

  // Inject HttpClient for making HTTP requests like GET, POST, PUT, DELETE and more:-
  constructor(private http: HttpClient) {}

  // Register user
  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // Login user
  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // Fetch logged-in user profile
  getProfile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // Update user profile (email and/or password)
  updateProfile(data: any) {
    return this.http.put(`${this.baseUrl}/profile`, data);
  }

  // Logout user (server revokes token)
  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }//


}// End of AuthService class
