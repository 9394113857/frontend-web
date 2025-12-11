import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/******************************************************************
 * AuthGuard
 * ---------
 * This guard protects routes that require authentication.
 * It checks whether a valid token exists in localStorage.
 *
 * If token exists  → allow access to the route.
 * If token missing → redirect user to /login.
 ******************************************************************/
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    // Check if token exists in browser storage
    const token = localStorage.getItem("token");

    // If token exists → allow access
    if (token) return true;

    // If no token → redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
