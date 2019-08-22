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
  html = `hello <strong>world</strong> <script >alert('hwllo')</script>`;
  color = 'red';

  constructor() {
  }

  ngOnInit() {
    this.berechneterWert = this.rechne ( 1, 2 );
    let intervalID: number;
    intervalID = window.setInterval( () => {
      this.height += 20;
      this.width += 20;
      if ( this.width > 360 ) {
        window.clearInterval( intervalID );
      }
    }, 1000 );
  }

  methode( msg: string = '' ) {
    return 'rückgabe der Methode ' + msg;
  }

  rechne( wert1: number, wert2: number ): number {
    return wert1 + wert2;
  }
}
