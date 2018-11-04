import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private router: Router, private authGuard: AuthGuard) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    const expectedRole = route.data.expectedRole;
    
    return this.verifyLogin(url,expectedRole);
  }

  verifyLogin(url,assignRole): boolean {
    const userRole = localStorage.getItem('userRole');
    if (this.authGuard.verifyLogin(url)&& (assignRole == userRole)) {
      return true;
    }
    else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
