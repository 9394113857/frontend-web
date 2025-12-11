import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form = {
    email: "",
    password: ""
  };

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login(this.form).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.access_token);
        alert("Login successful!");
        this.router.navigate(['/products']);
      },

      // 🔥 FIXED ERROR BLOCK
      error: (err) => {
        const msg =
          err.error?.message ||
          err.error?.error ||
          "Login failed. Please try again.";

        alert(msg);
      }
    });
  }
}
