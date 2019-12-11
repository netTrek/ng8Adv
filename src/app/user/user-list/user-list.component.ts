import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'nt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ünlü'},
    {firstname: 'peter', lastname: 'müller'}
  ];
  selectedUser: User;

  constructor() { }

  ngOnInit() {
/*    for ( const user of this.userList ) {
      console.log ( user );
    }*/
  }

  selectUser( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
}
