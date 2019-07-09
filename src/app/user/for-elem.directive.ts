import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: 'button.my-button.my-button2, a[href]'
})
export class ForElemDirective implements OnInit {

  constructor( private elemRef: ElementRef, private renderer: Renderer2 ) {
    console.log ( elemRef.nativeElement );
  }

  ngOnInit(): void {
    this.renderer.setStyle( this.elemRef.nativeElement,
      'background-color', 'grey' );
  }

}
