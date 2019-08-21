import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'dvz-bindings-sample',
  templateUrl: './bindings-sample.component.html',
  styleUrls  : [ './bindings-sample.component.scss' ]
} )
export class BindingsSampleComponent implements OnInit {
  wert            = 'hello world';
  berechneterWert = 0;
  width = 320;
  height = 240;

  constructor() {
  }

  ngOnInit() {
    this.berechneterWert = this.rechne ( 1, 2 );
    // window.setInterval( () => {
    //   this.height += 20;
    //   this.width += 20;
    // }, 1000 );
  }

  methode( msg: string = '' ) {
    return 'rückgabe der Methode ' + msg;
  }

  rechne( wert1: number, wert2: number ): number {
    return wert1 + wert2;
  }
}
