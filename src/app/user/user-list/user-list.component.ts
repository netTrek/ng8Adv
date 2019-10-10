import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    { name: 'Peter', age: 11 },
    { name: 'Petra', age: 22 },
    { name: 'Saban', age: 33 }
  ];
  selectedUser: User;
  showForm = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectUser( user: User/*, payload?: any*/ ) {
    /*console.log ( payload );*/
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  delSelected() {
    if ( !! this.selectedUser ) {
      this.delInd( this.userList.indexOf( this.selectedUser ));
    }
  }
  delInd( ind: number ) {
    const toDel: User = this.userList[ ind ];
    if ( !! toDel ) {
      if ( toDel === this.selectedUser ) {
        this.selectedUser = undefined;
      }
      this.userList.splice( ind, 1 );
    }
  }
  addUser( name: string, age: number|string ) {
    age = Number(age);
    if ( age > 0 && name.trim() !== '' ) {
      this.userList.push( {name, age} );
    }
    this.deactivateForm();
  }
  activateForm() {
    this.showForm = true;
  }
  deactivateForm() {
    this.showForm = false;
  }
}
