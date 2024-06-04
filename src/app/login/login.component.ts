// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']); // Navegar a la página del dashboard
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      this.authService.signup(username, email, password).subscribe(
        (response) => {
          console.log('Signup successful', response);
          this.router.navigate(['/dashboard']); // Navegar a la página del dashboard
        },
        (error) => {
          console.error('Signup failed', error);
        }
      );
    }
  }

  toggleForms(): void {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.toggle('sign-up-mode');
    } else {
      console.error('container not found');
    }
  }
}
