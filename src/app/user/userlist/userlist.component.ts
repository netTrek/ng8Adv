import { Component, OnInit } from '@angular/core';
import { User } from '../user';
/*
ng generate component userlist --skip-tests
 */

@Component({
  selector: 'ba-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: User[] = [
    {firstname: 'saban', lastname: 'ünlü', age: 44},
    {firstname: 'peter', lastname: 'Müller', age: 33},
    {firstname: 'heike', lastname: 'Mayer', age: 22},
  ];

  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  setSelectedUser( selectedUser: User ) {
    if ( this.selectedUser === selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = selectedUser;
    }
  }
}
