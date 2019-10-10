import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'dvz-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    { name: 'Peter', age: 11 },
    { name: 'Petra', age: 22 },
    { name: 'Saban', age: 33 }
  ];
  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  selectUser( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
}
