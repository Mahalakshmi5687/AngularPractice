import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'login@gmail.com' && password === '1234') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
