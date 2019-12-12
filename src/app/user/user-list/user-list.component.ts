import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { PlayWithMe } from '../play-with-me';
import { UserService } from '../user.service';

@Component({
  selector: 'nt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  selectedUser: User;

  constructor( private $user: UserService ) {}

  ngOnInit() {
  }

  selectUser( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  addNewUser( firstname: string, lastname: string ) {
    this.selectedUser = { firstname, lastname };
    this.$user.add( this.selectedUser );
  }

  updateSelectedUser( firstname: string,
                      lastname: string ) {
    this.selectedUser = this.$user.update(
      this.selectedUser,
      firstname,
      lastname
    );
  }

  delSelectedUsr() {
    if ( this.$user.del( this.selectedUser ) ) {
      this.selectedUser = undefined;
    }
  }
}
