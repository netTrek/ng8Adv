import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  selector: '[baDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.background-color' )
  bgColor = 'red';

  @Output ()
  doIt: EventEmitter<boolean> = new EventEmitter ();

  @Input ()
  set disabled( value: string ) {
    this.bgColor = 'green';
  }

  @Input()
  baDanger = 'sicher, dass du das willst?';
  constructor() {
    console.log ( 'hello danger' );
  }

  @HostListener ( 'click' )
  doConfirm() {
    if ( confirm ( this.baDanger ) ) {
      console.log ( 'mach was' );
      this.doIt.emit ( true );
    }
  }

}
