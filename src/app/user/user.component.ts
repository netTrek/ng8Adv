import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'dvz-user',
  templateUrl: './user.component.html',
  // template: `hello world`,
  styleUrls  : [ './user.component.scss' ],
  // styles: [`h1 { color: red }`],
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserComponent implements OnInit, OnDestroy {
  username = 'saban ünlü';
  private sub: Subscription;

  constructor( public  $user: UserService ) {
    console.log ( $user );
    this.sub = $user.name$.subscribe(
      // console.log
    );
  }

  ngOnInit() {
    this.chgName();
  }

  chgName() {
    this.username = 'peter müller';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub = undefined;
  }
}
