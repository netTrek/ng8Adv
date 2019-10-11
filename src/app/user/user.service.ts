import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getUserByID( id: number ): Observable<User> {
    return this.$http.get<User> ( `${this.endpoint}/${id}` );
  }

  delInd( ind: number ): User {
    const toDel: User = this.userList[ ind ];
    if ( !!toDel ) {
      // this.userList.splice ( ind, 1 );
      this.$http.delete ( `${this.endpoint}/${toDel.id}` )
          .subscribe (
            next => this.updateUserList ()
          );
    }
    return toDel;
  }

  addUser( name: string, age: number | string ) {
    age = Number ( age );
    if ( age > 0 && name.trim () !== '' ) {
      const user = { name, age };
      // this.userList.push ( user );
      // const headers: HttpHeaders = new HttpHeaders().set( 'Authorization', 'Bearer: netTrek');
      // const options = {
      //   headers
      // };
      this.$http.post ( this.endpoint, user/*, options */ )
          .subscribe (
            next => this.updateUserList ()
          );
      // this.last$.next ( user );
    }
  }

  updateUserList() {
    this.$http.get<User[]> ( this.endpoint )
        .subscribe (
          next => {
            this.userList = next;
            this.last$.next ( next [ next.length - 1 ] );
          }
        );
  }
}
