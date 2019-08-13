import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive ( {
  selector: '[baDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.background-color' )
  bgColor = 'red';

  @Output()
  doIt: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log ( 'hello danger' );
  }

  @HostListener ( 'click' )
  doConfirm() {
    if ( confirm ( 'sicher, dass du das willst?' ) ) {
      console.log ( 'mach was' );
      this.doIt.emit( true );
    }
  }

}
