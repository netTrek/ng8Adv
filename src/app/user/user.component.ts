import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
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

  constructor(  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
