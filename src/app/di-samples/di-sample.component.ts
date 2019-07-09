import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'msg-di-sample',
  templateUrl: './di-sample.component.html',
  styleUrls: ['./di-sample.component.scss']
})
export class DiSampleComponent implements OnInit {

  constructor( public $myService: MyService ) { }

  ngOnInit() {
    this.$myService.myVar$.subscribe( value => {
      console.warn ( value );
    });
  }

}
