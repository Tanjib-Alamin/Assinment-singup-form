import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const user = { username: this.username, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    
    console.log('Signup data saved to LocalStorage:', user);

    this.successMessage = 'Signup successful!';
    this.errorMessage = '';
    this.clearForm();

    // Redirect to login page after signup
    setTimeout(() => this.router.navigate(['/login']), 1000);
  }

  clearForm() {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
