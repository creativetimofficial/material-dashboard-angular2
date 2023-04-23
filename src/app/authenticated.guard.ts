import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";

function base64UrlDecode(str: string): string {
  const base64 = str.replace('-', '+').replace('_', '/');
  return atob(base64);
}

// Function to check whether a JWT token is expired
function isJwtExpired(token: string): boolean {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payloadJson = base64UrlDecode(parts[1]);
    const payload = JSON.parse(payloadJson);

    if (!payload.exp) {
      throw new Error('Token does not contain an expiration');
    }

    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    return currentTime >= payload.exp;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return true; // Treat the token as expired if an error occurs
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.userService.getAppJwtToken();

    try {
      if (!token || isJwtExpired(token)) {
        return this.router.createUrlTree(["/login"]);
      }
    } catch (err) {
      return this.router.createUrlTree(["/login"]);
    }

    return true;
  }
  
}
