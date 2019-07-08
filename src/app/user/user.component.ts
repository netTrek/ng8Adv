import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnDestroy,
  OnInit, Output,
  QueryList,
  Renderer2,
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
  implements OnInit, OnDestroy {
  @Input ()
  user: User;

  @Output()
  selectUsr: EventEmitter<User> = new EventEmitter<User>();

  constructor(  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  emitEvent() {
    this.selectUsr.emit( this.user );
  }
}
