import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  name = 'Saban Ünlü';
  width = 100;
  height = 100;
  catname = 'Nala';

  constructor() {
  }

  ngOnInit() {
    this.startInterval ();
  }

  changeName() {
    const hello = 'world';
    this.name   = `${hello} Peter Müller`;
    this.width = this.height = 300;
  }

  getName(): string {
    console.log ( 'getName' );
    return this.name;
  }

  private startInterval() {
    let hepStart = 0;
    let intervalID;
    intervalID = window.setInterval( () => {
      console.log ( 'hep' );
      if ( ++ hepStart  === 10 ) {
        window.clearInterval( intervalID );
      }
    }, 100 );
  }
}

