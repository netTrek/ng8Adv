import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList: User[] = [];
  // endpoint = 'http://localhost:3000/users';
  endpoint         = environment.endpoint;

  last$ = new BehaviorSubject<User> ( undefined );

  constructor( private $http: HttpClient ) {
    this.updateUserList ();
  }

  delInd( ind: number ): User {
    const toDel: User = this.userList[ ind ];
    if ( !!toDel ) {
      this.userList.splice ( ind, 1 );
    }
    return toDel;
  }

  addUser( name: string, age: number | string ) {
    age = Number ( age );
    if ( age > 0 && name.trim () !== '' ) {
      const user = { name, age };
      this.userList.push ( user );
      this.last$.next ( user );
    }
  }

  updateUserList() {
    this.$http.get<User[]> ( this.endpoint )
        .subscribe (
          next => {
            this.userList = next;
            this.last$.next( next [next.length - 1 ] );
          }
        );
  }
}
