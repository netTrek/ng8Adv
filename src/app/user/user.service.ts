import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList$: BehaviorSubject<User[]> = new BehaviorSubject ( [] );

  constructor( private $http: HttpClient ) {
    this.getUsers ();
  }

  getUsers(): Promise<User[]> {
    return this.$http.get<User[]> ( environment.endpoint )
               .pipe (
                 tap ( x => this.userList$.next ( x ) )
               )
               .toPromise ();
  }

  createNewUser( user: User ): Promise<User> {
    return this.$http.post<User>( environment.endpoint, user ).pipe(
      tap ( x => this.getUsers() )
    ).toPromise();
  }
}
