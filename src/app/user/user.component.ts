import { Component, Inject, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { MY_CLASS_SAMPLE, MY_FAC_SAMPLE, MY_NAME, NAMES } from '../app.token';

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
export class UserComponent implements OnInit {
  selectedClasses = 'red';
  isSelected      = false;

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
    this.$user.last$.subscribe( next => console.log (  'last user is', next ) );
  }

}

