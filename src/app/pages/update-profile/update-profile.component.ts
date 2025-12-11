import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent {

  form = {
    email: "",
    password: ""
  };

  constructor(private auth: AuthService) {}

  update() {
    this.auth.updateProfile(this.form).subscribe({
      next: res => alert("Profile updated successfully"),
      error: err => alert(err.error.message)
    });
  }
}
