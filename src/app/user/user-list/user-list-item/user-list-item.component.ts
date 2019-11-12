import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'rp-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

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
}
