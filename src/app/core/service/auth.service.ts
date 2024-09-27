import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Check if user is authenticated (e.g., check if a token is available)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Returns true if a token is found
  }

  // Simulate a login by setting a token
  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Simulate a logout by removing the token
  logout(): void {
    localStorage.removeItem('authToken');
  }

}
