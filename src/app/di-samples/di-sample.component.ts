import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MyService } from './my-service';
import { USER_EXI, USER_FAC, USER_NAME } from '../my-token';

@Component({
  selector: 'msg-di-sample',
  templateUrl: './di-sample.component.html',
  styleUrls: ['./di-sample.component.scss']
})
export class DiSampleComponent implements OnInit {

  constructor( public $myService: MyService,
               @Inject( USER_NAME ) public userName: string[],
               @Optional() @Inject( USER_EXI ) public userExi: string[],
               @Inject( USER_FAC ) public userFac: {test: string}
  ) { }

  ngOnInit() {
    this.$myService.myVar$.subscribe( value => {
      console.warn ( value );
    });
  }

}
