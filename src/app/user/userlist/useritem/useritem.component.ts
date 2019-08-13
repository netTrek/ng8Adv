import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  @HostBinding ('class.selected')
  selected: boolean;

  @Input()
  @HostBinding( 'style.color' )
  fontcolor = 'red';

  constructor() {
  }
  ngOnInit() {
  }

  @HostListener('click')
  doSelection() {
    this.selectUsr.emit( this.user );
  }

  // @HostListener('mouseenter')
  // doGreen () {
  //   this.fontcolor = 'green';
  // }
  //
  // @HostListener('mouseleave')
  // doRed () {
  //   this.fontcolor = 'red';
  // }
}
