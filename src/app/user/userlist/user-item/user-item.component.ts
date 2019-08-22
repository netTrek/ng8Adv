import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../user';
import { debug } from 'util';

@Component ( {
  selector   : 'dvz-user-item',
  templateUrl: './user-item.component.html',
  styleUrls  : [ './user-item.component.scss' ]
} )
export class UserItemComponent implements OnInit, OnChanges {

  @Input () user: User;
  @Output () selectUsr: EventEmitter<User> = new EventEmitter ();

  @Input ()
  @HostBinding ( 'class.selected' )
  set selected( value: boolean ) {
    console.log ( 'crr', this.$selected, 'next', value );
    this.$selected = value;
  }
  get selected(): boolean {
    return this.$selected;
  }

  private $selected = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  clicked() {
    this.selectUsr.emit ( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.selected ) {
      console.log ( changes.selected ); // SimpleChange {previousValue: undefined, currentValue: false, firstChange: true}
    }
  }
}
