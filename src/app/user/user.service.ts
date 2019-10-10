import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList: User[] = [
    { name: 'Peter', age: 11 },
    { name: 'Petra', age: 22 },
    { name: 'Saban', age: 33 }
  ];

  constructor() {
  }

  delInd( ind: number ): User {
    const toDel: User = this.userList[ ind ];
    if ( !! toDel ) {
      this.userList.splice( ind, 1 );
    }
    return toDel;
  }

  addUser( name: string, age: number | string ) {
    age = Number ( age );
    if ( age > 0 && name.trim () !== '' ) {
      this.userList.push ( { name, age } );
    }
  }
}
