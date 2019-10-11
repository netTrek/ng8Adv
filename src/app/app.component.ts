import { Component } from '@angular/core';
import { Dummy } from './user/dummy';
import { LoadingService } from './loading.service';

@Component ( {
  selector   : 'dvz-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'dvz';

  constructor( public $dummy: Dummy, public $loading: LoadingService) {
    // console.log ( $dummy );
    $dummy.sagHallo ();
  }
}
