/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { Injectable } from '@angular/core';
import { User } from './user';
import { UserStoreService } from './user-store.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  constructor( private userStore$: UserStoreService, private $http: HttpClient ) {
    this.init ();
  }

  updateUserList() {
    // this.$http.get<User[]> ( environment.endpoint ).subscribe(
    //   userList => this.userStore$.setValue( 'userList', userList )
    // );
    this.userStore$
        .setValue ( 'userList',
          this.$http
              .get<User[]> ( environment.endpoint ) );
  }

  getUserByID( id: number ): Observable<User> {
    return this.$http.get<User> ( environment.endpoint + id );
  }

  addUser( firstname: string, lastname: string ) {
    if ( firstname.trim () !== ''
      &&
      lastname.trim () !== ''
    ) {
      this.$http
          .post <User> ( environment.endpoint, { firstname, lastname } )
          .pipe (
            tap ( () => this.updateUserList () )
          )
          .subscribe (
            // locale Datenhaltung;
            // newUsr => {
            //   this.userStore$.setValue( 'userList', [
            //     ...this.userStore$.value.userList, newUsr
            //   ] );
            // }
          );
      // this.userStore$.setValue( 'userList', [
      //   ...this.userStore$.value.userList, { firstname, lastname }
      // ] );
      // this.userList$.next ( [ ...this.userList$.value,
      //                         { firstname, lastname }
      // ] );
      // this.userList.push (
      //   { firstname, lastname }
      // );
    }
  }

  delSelected( selectedUser: User | undefined ) {
    if ( !!selectedUser ) {
      const userList = this.userStore$.value.userList;
      userList.splice (
        userList.indexOf ( selectedUser ),
        1
      );
      this.userStore$.setValue ( 'userList', userList );
      // const userList = this.userList$.value;
      // userList.splice (
      //   userList.indexOf ( selectedUser ),
      //   1
      // );
      // this.userList$.next ( userList );
    }
  }

  private init() {
    this.updateUserList ();
  }
}
