import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'dvz-userlist',
  templateUrl: './userlist.component.html',
  styleUrls  : [ './userlist.component.scss' ]
} )
export class UserlistComponent implements OnInit {
  selectedInd: number;
  userList: User[] = [
    { firstname: 'Saban', lastname: 'Ünlü', age: 44 },
    { firstname: 'Heike', lastname: 'Maier', age: 43 },
    { firstname: 'Peter', lastname: 'Müller', age: 42 }
  ];
  selectedUsr: User;

  constructor() {
  }

  ngOnInit() {
  }

  setSelectedUsr( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    } else {
      this.selectedUsr = user;
    }
  }

  setSelectedInd( val: number,
                  event?: MouseEvent ) {
    this.selectedInd = val;
    console.log ( event );
  }

  addUser() {
    const age = Date.now ();
    this.userList.push (
      {
        firstname: `saban ${age}`,
        lastname : `uenlue ${age}`,
        age
      }
    );
  }

  delSelected() {
    if ( this.selectedUsr ) {
      this.delUsr ( this.selectedUsr );
    }
  }

  delLast() {
    const lng = this.userList.length;
    if ( lng > 0 ) {
      this.delUsr ( this.userList [ lng - 1 ] );
    }
  }

  private delUsr( usr: User ) {
    const ind = this.userList
                    .indexOf ( usr );
    if ( ind !== - 1 ) {
      if ( usr === this.selectedUsr ) {
        this.selectedUsr = undefined;
      }
      this.userList
          .splice ( ind, 1 );
    }

  }
}
