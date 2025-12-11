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

        // Save token in browser
        localStorage.setItem("token", res.access_token);

        alert("Login successful!");

        this.router.navigate(['/profile']);
      },
      error: err => alert(err.error.message)
    });
  }
}
