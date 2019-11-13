import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'rp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  selectedClassName = 'selected underlined';

  @ViewChildren ( UserListItemComponent )
  userItems: QueryList<UserListItemComponent>;

  userList: User[] =
    [
      {firstname: 'saban', lastname: 'uenlue'},
      {firstname: 'peter', lastname: 'mueller'}
    ];
  selectedUser: User;

  constructor( ) {
  }

  ngOnInit() {
  }

  selectUser( userToSelect: User ) {
    // this.selectedUser = userToSelect;
    this.selectedUser =
      this.selectedUser === userToSelect ?
      undefined :
      userToSelect;

    this.userItems.forEach(
      item => item.isSelected = item.user === this.selectedUser
    );
    // lange Fassung für bessere Lesbarkeit
    // this.userItems.forEach(
    //   ( item ) => {
    //     item.isSelected = item.user === this.selectedUser;
    //   }
    // );
  }

  addUser( firstname: string, lastname: string ) {
    if ( firstname.trim() !== ''
          &&
         lastname.trim() !== ''
    ) {
      this.userList.push(
        { firstname, lastname }
      );
    }
  }

  delSelected() {
    if ( !!this.selectedUser ) {
      this.userList.splice(
        this.userList.indexOf( this.selectedUser ),
        1
      );
    }
  }
}
