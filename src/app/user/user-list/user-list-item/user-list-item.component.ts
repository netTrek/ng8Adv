import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'nt-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : [ './user-list-item.component.scss' ]
} )
export class UserListItemComponent implements OnInit, OnChanges {

  @Input ()
  user: User;

  @Output()
  selectedUsr: EventEmitter<User> = new EventEmitter();

  @Input()
  @HostBinding ('class.selected')
  isSelected = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  click() {
    this.selectedUsr.emit( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty('isSelected') ) {
      const val = changes.isSelected.currentValue;
      if ( val === true ) {
        // console.log ( 'item is selected' );
      } else {
        if ( !changes.isSelected.firstChange ) {
          // console.log ( 'item is deselected' );
        }
      }
    }
  }

}
