import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'dvz-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : [ './user-details.component.scss' ]
} )
export class UserDetailsComponent implements OnInit {
  id: number;
  user: User;

  constructor( private route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {
    console.log ( 'detail init' );
    this.detectID ();
  }

  private detectID() {

    /*    this.route.paramMap
            // .pipe(
            //   map( paramMap => Number ( paramMap.get( 'id') ) ),
            // )
            // .subscribe ( id => this.id = id );

            .pipe(
              map( paramMap => Number ( paramMap.get( 'id') ) ),
              switchMap( value =>  this.$user.getUserByID( value ) )
            )
            .subscribe ( user => this.user = user );
            */

    this.route.data.pipe (
      // map ( value => value.saban ) // für die statische saban Eigenschasft
      map ( value => value.userDetail )
    )
        .subscribe (
          user => this.user = user
        );
  }
}
