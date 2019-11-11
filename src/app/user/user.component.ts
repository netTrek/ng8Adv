import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rp-user',
  // template: '<strong>hello</strong>',
  // template: `<h1>user</h1>
  // <h2>{{name}}</h2>`,
  templateUrl: './user.component.html',
  // styles: [ `/*h1 { background: red}*/`]
  styleUrls: ['./user.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDomNone
  // encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name = 'saban ünlü';
  private count = 0;
  catfile = 'cat1.jpeg';
  ind = 1;

  constructor() { }

  ngOnInit() {
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
}
