import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'rp-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent
  implements OnInit, OnChanges {

  @Input() user: User;

  @Input()
  @HostBinding ('class.selected')
  isSelected = false;


  @Output() selectUsr: EventEmitter<User> =
                                new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @HostListener ('click')
  selectUser() {
    this.selectUsr.emit( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    // if ( changes.hasOwnProperty('isSelected') ) { // gibt es die Eigenschaft
    if ( !! changes.isSelected ) { // gibt es die Eigenschaft
      const selectonState: SimpleChange = changes.isSelected;
      console.log ( selectonState.currentValue );
    }
  }
}
