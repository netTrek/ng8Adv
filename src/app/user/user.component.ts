import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector     : 'ba-user',
  templateUrl  : './user.component.html',
  // template: `hello world`,
  styleUrls    : [ './user.component.scss' ],
  // styles: [ `h1 {color: red}`]
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserComponent implements OnInit {

  name   = 'saban ünlü';
  imgUrl = 'http://placekitten.com/g/200/300';
  imgAlt = 'cat';

  color = 'blue';

  width = 300;

  html     = `hello <strong>world</strong>
<script>alert('hoppa');</script>`;
  private intervalID: number;
  classStr = 'green-font bold-font';
  selected = false;

  constructor() {
  }

  chgName() {
    this.name = 'peter müller';
  }

  ngOnInit() {
    console.log ( 'comp init' );
    this.startInterval ();
  }

  getUrl(): string {
    console.log ( 'get img url' );
    return this.imgUrl;
  }

  toggleClassStr() {
    this.classStr = 'blue-font bold-font';
  }

  toggleSelection() {
    /*
    if ( this.selected === false ) {

    }
    */
    /*
    if ( !this.selected ) {

    }
    */
    this.selected = !this.selected;
  }

  private startInterval() {
    let count       = 0;
    this.intervalID = window.setInterval ( () => {
      console.log ( 'intervall' );
      if ( count ++ === 10 ) {
        this.stopInterval ();
      }
    }, 100 );
  }

  private stopInterval() {
    window.clearInterval ( this.intervalID );
  }
}
