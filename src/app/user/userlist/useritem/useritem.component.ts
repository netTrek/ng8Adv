import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

/*
 ng generate component useritem --skip-tests

 */
@Component ( {
  selector   : 'ba-useritem',
  templateUrl: './useritem.component.html',
  styleUrls  : [ './useritem.component.scss' ]
} )
export class UseritemComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  selectUsr: EventEmitter<User> = new EventEmitter();

  constructor() {
  }
  ngOnInit() {
  }

  doSelection() {
    console.log( 'do selection');
    this.selectUsr.emit( this.user );
  }
}
