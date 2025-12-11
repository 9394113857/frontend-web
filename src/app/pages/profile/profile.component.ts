import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user: any = {};

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getProfile().subscribe({
      next: (res: any) => this.user = res,
      error: () => this.router.navigate(['/login'])
    });
  }

  logout() {
    // Call backend logout to revoke token
    this.auth.logout().subscribe({
      next: () => {
        // Remove token from browser
        localStorage.removeItem("token");

        alert("Logged out successfully!");

        // Redirect to login page
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if backend fails, still remove token
        localStorage.removeItem("token");
        this.router.navigate(['/login']);
      }
    });
  }
}
