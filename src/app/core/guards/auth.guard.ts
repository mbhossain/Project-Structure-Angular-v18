import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject the AuthService
  const router = inject(Router); // Inject Router to handle redirects

  if (authService.isAuthenticated()) {
    return true; // User is authenticated, allow access
  } else {
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false; // Block access
  }
};
