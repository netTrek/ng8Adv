import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'dvz-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : [ './user-details.component.scss' ]
} )
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: User;
  private sub: Subscription;

  constructor( private $route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {
    this.sub = this.$route.paramMap
        .pipe (
          map ( paramMap => Number (paramMap.get ( 'id' ) ) ),
          switchMap( id => this.$user.getUser( id ))
        )
        .subscribe ( user => this.user = user );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub = undefined;
  }

}
