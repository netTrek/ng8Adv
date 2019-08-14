import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MyTestService } from '../my-test-service';
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

  constructor( public $myService: MyTestService ) { }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }

  setSelectedUser( selectedUser: User ) {
    if ( this.selectedUser === selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = selectedUser;
    }
  }

  delLast() {
    this.users.pop();
    this.$myService.wert = 'deleted user!';
  }
}
