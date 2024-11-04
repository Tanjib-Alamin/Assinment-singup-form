import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === this.username && user.password === this.password) {
        this.errorMessage = '';
        alert('Login successful!');
        // Redirect to a home or dashboard page if needed
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    } else {
      this.errorMessage = 'No account found. Please sign up first.';
    }
  }
}
