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

  name    = 'Saban Ünlü';
  width   = 100;
  height  = 100;
  catname = 'Nala';

  html = `
  <h1>hello Angular</h1><script>alert('hab dich')</script>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium aliquam commodi, esse harum illo, inventore <strong>itaque</strong> laudantium magni molestias nisi non officia provident repudiandae sapiente similique sint vero voluptatibus?</p>
  `;

  constructor() {
  }

  ngOnInit() {
  }

  changeName() {
    const hello = 'world';
    this.name   = `${hello} Peter Müller`;
    this.width  = this.height = 300;
  }

  getName(): string {
    console.log ( 'getName' );
    return this.name;
  }

}

