import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'rp-user',
  // template: '<strong>hello</strong>',
  // template: `<h1>user</h1>
  // <h2>{{name}}</h2>`,
  templateUrl: './user.co' +
    'mponent.html',
  // styles: [ `/*h1 { background: red}*/`]
  styleUrls  : [ './user.component.scss' ]
  // encapsulation: ViewEncapsulation.ShadowDomNone
  // encapsulation: ViewEncapsulation.None
} )
export class UserComponent implements OnInit, OnDestroy {
  name          = 'saban ünlü';
  classList = 'klaus';
  private count = 0;
  catfile       = 'cat1.jpeg';
  catfile2      = './assets/images/cat2.jpeg';
  ind           = 1;
  width         = 50;
  private intervalID: number;
  htmlStr = `Hello <strong>world!</strong><script>document.location.href = 'https://netTrek.de'</script>`;

  constructor() {
  }

  ngOnInit() {
    this.startInterval ();
  }

  changeName() {
    this.name = 'Peter Müller';
  }

  getCounter() {
    // console.log ( 'nurmit bedacht nutzen!!!' );
    return this.count;
    // return this.name
  }

  toggleCat() {
    this.ind = this.ind === 1 ? 2 : 1;
  }

  private startInterval() {
    this.intervalID = window.setInterval (
      () => {
        this.width -= 10;
        if ( this.width === 10 ) {
          this.stopInterval ();
        }
      }, 500
    );
  }

  private stopInterval() {
    if ( !! this.intervalID ) {
      window.clearInterval( this.intervalID );
      this.intervalID = undefined;
    }
  }

  over( $event: MouseEvent ) {
    console.log ( 'over', $event );
  }

  ngOnDestroy(): void {
    this.stopInterval ();
  }
}
