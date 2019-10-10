import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  selector: 'button[dvzDangerBtn]'
} )
export class DangerBtnDirective {

  @Input ()
  @HostBinding ( 'style.backgroundColor' ) color = 'red';

  @HostBinding ( 'style.fontSize' ) size = 'large';

  @Input()
  dvzDangerBtn = '';

  @Output () confirmed: EventEmitter<undefined> = new EventEmitter ();

  /*
    constructor( private elemRef: ElementRef, renderer: Renderer2 ) {
      ( elemRef.nativeElement as HTMLElement).style.backgroundColor = 'red'; // so nie
      renderer.setStyle( elemRef.nativeElement, 'backgroundColor', 'yellow' ); // so gerne mal
    }*/

  constructor() {
  }

  @HostListener ( 'click' )
  clickHandler() {
    const msg = this.dvzDangerBtn === '' ? 'soll das wirklich?' : this.dvzDangerBtn;
    if ( confirm ( msg ) ) {
      this.confirmed.emit ();
    }
  }
}
