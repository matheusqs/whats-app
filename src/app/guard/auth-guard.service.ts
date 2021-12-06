import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         CanActivate,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLoginService } from '../auth/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthLoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isAuthenticated = this.auth.isAuthenticated();

    return true;

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
