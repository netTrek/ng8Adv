import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dvz-user',
  templateUrl: './user.component.html',
  // styles: [ `h1 {
  //   color: red;
  // }`]
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    const hello = 'world';
    this.name = `${hello} Peter Müller`;
  }
}

