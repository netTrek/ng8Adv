import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'dvz-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : [ './user-list-item.component.scss' ]
} )
export class UserListItemComponent implements OnInit, OnChanges {

  @Input () user: User                     = { name: '', age: 1 };
  @Input () selectedUsr: User;
  @Output () selectUsr: EventEmitter<User> = new EventEmitter ();

  /**
   * <dvz-user-list-item [class.selected]="isSelected">
   */
  @HostBinding ('class.selected')
  isSelected: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  triggerEvent() {
    this.selectUsr.emit ( this.user );
  }
  /*
  @HostListener ( 'mouseenter', [ '$event' ] )
  mouseMove( event: MouseEvent ) {
    console.log ( event );
  }
  */

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty ( 'selectedUsr' ) && !! this.user ) {
      this.isSelected = this.user === changes.selectedUsr.currentValue;
    }
  }
}
