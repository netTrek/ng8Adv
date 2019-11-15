import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {

  constructor( private $user: UserService ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    const id = parseInt( route.paramMap.get ( 'id' ), 10 );
    return this.$user.getUserByID( id );
  }
}
