/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {providedIn: 'root'} )
export class UserService {
  userList: User[] =
    [
      {firstname: 'saban', lastname: 'uenlue'},
      {firstname: 'peter', lastname: 'mueller'}
    ];

  addUser( firstname: string, lastname: string ) {
    if ( firstname.trim() !== ''
      &&
      lastname.trim() !== ''
    ) {
      this.userList.push(
        { firstname, lastname }
      );
    }
  }

  delSelected( selectedUser: User|undefined  ) {
    if ( !!selectedUser ) {
      this.userList.splice(
        this.userList.indexOf( selectedUser ),
        1
      );
    }
  }
}
