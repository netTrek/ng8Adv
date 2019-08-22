import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  selector: 'button[dvzDanger], a[dvzDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.fontSize' )
  fontSize = 'larger';

  @HostBinding ( 'style.backgroundColor' )
  bgColor = 'red';

  @Output ()
  confirmed: EventEmitter<void> = new EventEmitter ();

  @Input ()
  dvzDanger = 'bist du sicher';

  constructor() {
  }

  @HostListener ( 'click' )
  clicked() {
    if ( confirm ( this.dvzDanger ) ) {
      this.confirmed.emit ();
    }
  }
}
