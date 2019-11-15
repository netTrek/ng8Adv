import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { first, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;
    return interval( 500 ).pipe( first(), mapTo (true) );
  }
}
