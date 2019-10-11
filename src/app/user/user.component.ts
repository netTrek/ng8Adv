import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { MY_CLASS_SAMPLE, MY_FAC_SAMPLE, MY_NAME, NAMES } from '../app.token';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'dvz-user',
  templateUrl: './user.component.html',
  // styles: [ `h1 {
  //   color: red;
  // }`]
  styleUrls  : [ './user.component.scss' ]
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
} )
export class UserComponent implements OnInit, OnDestroy {
  selectedClasses = 'red';
  isSelected      = false;
  private sub: Subscription;

  constructor( public $user: UserService,
               @Inject ( LOCALE_ID ) localeID: string,
               @Inject ( MY_NAME ) saban: string,
               @Inject ( NAMES ) names: string[],
               @Inject ( MY_CLASS_SAMPLE ) classSample: any,
               @Inject ( MY_FAC_SAMPLE ) facSample: any
  ) {

    console.log ( 'localeId', localeID );
    console.log ( 'my name', saban );
    console.log ( 'names', names );
    console.log ( 'classSample', classSample );
    console.log ( 'facSample', facSample );
    // $user.userList = [ { name: 'frank', age: 1 } ];
  }

  ngOnInit() {
    this.sub = this.$user.last$.subscribe( next => console.log (  'last user is', next ) );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

