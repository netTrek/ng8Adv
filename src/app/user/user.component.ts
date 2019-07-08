import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef, OnDestroy,
  OnInit, QueryList,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent
  implements OnInit, AfterContentInit,
              OnDestroy{

  @ContentChild ( 'stat', {static: true } )
  stat: ElementRef<HTMLElement>;

  @ContentChildren( UserIconComponent )
  icons: QueryList<UserIconComponent>;
  private sub: Subscription;
  constructor() { }

  ngOnInit() {
    console.log ( this.stat );
  }

  ngAfterContentInit(): void {
    console.log ( this.icons.toArray() );
    this.sub = this.icons.changes
        .subscribe( value => console.log ( value) );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
