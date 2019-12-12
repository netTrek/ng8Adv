import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'nt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : [ './user-detail.component.scss' ]
} )
export class UserDetailComponent implements OnInit {
  id: number;
  user: User;

  constructor( private route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {
    /*

    user wird erst geladen wenn route aktiviert wurde

    */
    // console.log ( 'init user detaail' );
    // this.route.paramMap
    //     .pipe(
    //       map( value => +value.get( 'id' ) ),
    //       tap ( id => this.id = id ),
    //       switchMap( id => this.$user.getById( id ) )
    //     )
    //     .subscribe(
    //       user => this.user = user
    //     );
    /*

    route (Kompoente) erst aktivieren wenn user daten  geladen wirde => resolve

    */

    this.route.data.pipe( map ( value => value.userData ) ).subscribe(
      user => this.user = user
    );
  }

}
