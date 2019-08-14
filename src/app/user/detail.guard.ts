import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { first, map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log ( next.paramMap.get( 'id' ) );
    const id = Number ( next.paramMap.get( 'id' ) );
    // direkte rückgabe
    // return true;
    // überprüfe ob user die rechte hat - hier asyn simuliert mit intervall
    return interval( 1500 ).pipe( first(),
      map( value => id % 2 === 0 ) );
  }
}
