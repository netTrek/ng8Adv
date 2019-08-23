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
  company: string;
  private sub: Subscription[] = [];

  constructor( private $route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {
    this.sub.push (
      this.$route.data
          .pipe ( map ( value => value.company ) )
          .subscribe ( company => this.company = company ),
      this.$route.data
          .pipe ( map ( value => value.user ) )
          .subscribe ( user => this.user = user )
      // this.$route.paramMap
      //     .pipe (
      //       map ( paramMap => Number ( paramMap.get ( 'id' ) ) ),
      //       switchMap ( id => this.$user.getUser ( id ) )
      //     )
      //     .subscribe ( user => this.user = user )
    );
  }

  ngOnDestroy(): void {
    while ( this.sub.length > 0 ) {
      this.sub.pop().unsubscribe();
    }
  }

}
