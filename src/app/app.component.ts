import { Component } from '@angular/core';
import { UserService } from './user/user-service';

@Component ( {
  selector   : 'rp-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'rundp';

  constructor(  ) {
  }
}

