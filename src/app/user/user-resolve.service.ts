import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { interval, Observable } from 'rxjs';
import { UserService } from './user.service';
import { debounceTime, first, switchMap, throttleTime } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserResolveService implements Resolve<User> {

  constructor( private $user: UserService ) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    return interval ( 200 )
      .pipe (
        first (),
        switchMap ( value => this.$user.getUser ( Number ( route.paramMap.get ( 'id' ) ) ) ) );
  }
}
