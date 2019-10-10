import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';

@Component ( {
  selector   : 'dvz-user',
  templateUrl: './user.component.html',
  // styles: [ `h1 {
  //   color: red;
  // }`]
  styleUrls  : [ './user.component.scss' ]
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
} )
export class UserComponent implements OnInit {
  selectedClasses = 'red';
  isSelected = false;

  constructor( $user: UserService ) {
    $user.userList = [ {name: 'frank', age: 1 } ];
  }

  ngOnInit() {
  }

}

