import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'nt-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls  : [ './binding-sample.component.scss' ]
} )
export class BindingSampleComponent implements OnInit {
  date: Date        = new Date ();
  myVar             = 123;
  text              = 'huhu .... wie geht es dir';
  html              = `
<div>${this.myVar}</div>
<script>alert('hello')</script>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>`;
  wertZumBinden     = 'hello world';
  imgFile           = 'cat1.jpeg';
  imgFileWithPath   = './assets/img/cat1.jpeg';
  imgFileWithoutExt = 'cat1';
  imgExt            = 'jpeg';
  dynLabel          = 'Description for Text';
  fontColor         = 'blue';
  widthInPercent    = '50%';
  width             = 100;
  private intervalId: number;
  classList = 'class2 class3';
  selected = false;

  constructor() {
  }

  ngOnInit() {
    this.intervalId = setInterval (
      () => {
        this.width -= 5;
        if ( this.width === 10 ) {
          this.stopInterval ();
        }
      },
      100
    );
  }

  chgImg() {
    this.imgFile = 'cat2.jpeg';
  }

  getFileWithExt( ext: string = 'jpeg' ): string {
    return this.imgFileWithoutExt + '.' + ext;
  }

  changeImgExt( type: string ) {
    this.imgExt = type;
  }

  private stopInterval() {
    clearInterval ( this.intervalId );
  }

  toggleSelection() {
    this.selected = !this.selected;
  }

  sayOver( type: string = 'over', mouseevent: MouseEvent) {
    console.log ( type, mouseevent );
  }

  eventPayload( $event: MouseEvent ) {
    console.log ( $event );
  }
}
