import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MyTestService } from '../my-test-service';
import { UserService } from '../user.service';

/*
ng generate component userlist --skip-tests
 */

@Component ( {
  selector   : 'ba-userlist',
  templateUrl: './userlist.component.html',
  styleUrls  : [ './userlist.component.scss' ]
} )
export class UserlistComponent implements OnInit {

  constructor( public $myService: MyTestService, public $user: UserService ) {}

  ngOnInit() {
  }

  delLast() {
    this.$user.delLastUsr ();
    this.$myService.wert = 'deleted user!';
  }

  createDummyUsr() {
    this.$user.create( {
      firstname: 'saban',
      lastname: 'uenlue',
      age: 44
    });
  }
}
