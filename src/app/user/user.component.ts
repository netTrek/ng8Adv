import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter, HostBinding, HostListener,
  Input, OnChanges,
  OnDestroy,
  OnInit, Output,
  QueryList,
  Renderer2, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';
import { interval, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { first } from 'rxjs/internal/operators/first';
import { User } from './user';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent
  implements OnInit, OnDestroy, OnChanges {
  @Input ()
  user: User;
  @Input ()
  selectedUsr: User;

  @Output()
  selectUsr: EventEmitter<User> = new EventEmitter<User>();

  @HostBinding('class.selected')
  selected = false;
  constructor(  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  ngOnChanges( changes: SimpleChanges ): void {
    // console.log ( changes );
    if ( changes.hasOwnProperty('selectedUsr') ) {
      this.selected = this.user === changes.selectedUsr.currentValue;
    }
  }

  @HostListener ('click')
  private emitEvent() {
    this.selectUsr.emit( this.user );
  }
}
