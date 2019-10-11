import { Component } from '@angular/core';
import { Dummy } from './user/dummy';

@Component ( {
  selector   : 'dvz-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'dvz';

  constructor( public $dummy: Dummy ) {
    // console.log ( $dummy );
    $dummy.sagHallo ();
  }
}
