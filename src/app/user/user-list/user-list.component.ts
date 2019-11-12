import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'rp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  selectedClassName = 'selected underlined';

  userList: User[] =
    [
      {firstname: 'saban', lastname: 'uenlue'},
      {firstname: 'peter', lastname: 'mueller'}
    ];
  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }


  selectUser( userToSelect: User ) {
    // this.selectedUser = userToSelect;
    this.selectedUser =
      this.selectedUser === userToSelect ?
      undefined :
      userToSelect;
  }
}
