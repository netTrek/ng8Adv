import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyTestService } from './my-test-service';

@Component ( {
  selector   : 'ba-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  constructor( public $myService: MyTestService ) {
    console.log ( $myService );
  }

  ngOnInit() {
  }

}
