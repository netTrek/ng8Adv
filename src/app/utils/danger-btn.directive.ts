import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive ( {
  // selector: 'button[rpDangerBtn], div[rpDangerBtn]'
  selector: 'button[rpDangerBtn]'
} )
export class DangerBtnDirective {

  @HostBinding ( 'style.backgroundColor' ) backgroundColor = 'red';
  @HostBinding ( 'style.fontSize' ) fontSize               = 'larger';
  @HostBinding ( 'style.fontWeight' ) fontWeight           = 'bold';

  @Input () rpDangerBtn: string;
  @Output () confirmed: EventEmitter<undefined> = new EventEmitter ();

  constructor() {
  }

  @HostListener ( 'click' )
  clicked() {
    if ( confirm( this.rpDangerBtn || 'willst du das wirklich' ) ) {
      this.confirmed.emit();
    }
  }

}
