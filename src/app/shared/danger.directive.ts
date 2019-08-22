import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive ( {
  selector: 'button[dvzDanger], a[dvzDanger]'
} )
export class DangerDirective {

  @HostBinding ( 'style.fontSize' )
  fontSize = 'larger';

  @HostBinding ( 'style.backgroundColor' )
  bgColor = 'red';

  @Output()
  confirmed: EventEmitter<void> = new EventEmitter();
  constructor() {
  }

  @HostListener ( 'click' )
  clicked() {
    if ( confirm( 'bist du sicher' ) ) {
      this.confirmed.emit();
    }
  }
}
