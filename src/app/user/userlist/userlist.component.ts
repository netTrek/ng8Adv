import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'dvz-userlist',
  templateUrl: './userlist.component.html',
  styleUrls  : [ './userlist.component.scss' ]
} )
export class UserlistComponent implements OnInit {

  selectedUsr: User;

  constructor( public $user: UserService ) {
  }

  ngOnInit() {
    this.$user.getUsers(); // .then( console.log );
  }

  setSelectedUsr( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    } else {
      this.selectedUsr = user;
    }
  }

  delSelected() {
    if ( this.selectedUsr ) {
      this.$user.delUsr ( this.selectedUsr );
      this.selectedUsr = undefined;
    }
  }

  addUser() {
    this.$user.createUser ();
  }

  delLast() {
    if ( this.selectedUsr === this.$user.delLast () ) {
      this.selectedUsr = undefined;
    }
  }

  updateSelectedUsr() {
    if ( this.selectedUsr ) {
      this.$user.updateUsr(
        {...this.selectedUsr,
          firstname: 'saban'}
      );
    }
  }
}
