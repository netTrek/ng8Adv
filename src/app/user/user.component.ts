import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayWithMe } from './play-with-me';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component ( {
  selector     : 'nt-user',
  templateUrl  : './user.component.html',
  styleUrls    : [ './user.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
} )
export class UserComponent implements OnInit, OnDestroy {
  name = 'Saban Ünlü';
  private subscription: Subscription;

  constructor( public play: PlayWithMe, private $user: UserService ) {
  }

  ngOnInit() {
    this.subscription = this.$user.userList$.subscribe (
      value => console.log ( 'crr list', value )
    );
  }

  chgName() {
    this.name = this.name === 'Saban Ünlü' ? 'Peter Müller' : 'Saban Ünlü';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe ();
  }
}
