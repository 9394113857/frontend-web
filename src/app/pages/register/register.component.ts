import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';   // <-- IMPORTANT for redirect

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Registration form model
  form = {
    email: "",
    password: ""
  };

  // Inject AuthService and Router for redirecting after success
  constructor(private auth: AuthService, private router: Router) {}

  // Register user and redirect to login on success
  register() {
    this.auth.register(this.form).subscribe({
      next: (res: any) => {
        alert("Registration successful!");

        // Redirect to login page
        this.router.navigate(['/login']);
      },
      error: err => {
        alert(err.error.message || "Registration failed");
      }
    });
  }

}
