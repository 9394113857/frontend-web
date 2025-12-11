import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = null;
  model: any = {};
  loading = false;
  editing = false;

  successMsg = '';
  errorMsg = '';

  // constructor(private auth: AuthService, private router: Router) {}
  constructor(public auth: AuthService, public router: Router) {}


  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading = true;

    this.auth.profile().subscribe({
      next: (res: any) => {
        this.profile = res;
        this.model = { ...res };
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Failed to load profile';
        this.loading = false;
      }
    });
  }

  enableEdit() {
    this.editing = true;
  }

  cancelEdit() {
    this.editing = false;
    this.model = { ...this.profile };
  }

  save() {
    this.successMsg = '';
    this.errorMsg = '';

    this.auth.updateProfile(this.model).subscribe({
      next: (res: any) => {
        this.successMsg = "Profile updated successfully!";
        this.editing = false;
        this.loadProfile();
        setTimeout(() => this.successMsg = '', 2500);
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Update failed';
      }
    });
  }
}
