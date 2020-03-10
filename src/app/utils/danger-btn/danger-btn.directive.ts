import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

// <button [style.color]="fontColor"

@Directive ( {
  selector: 'button[ntDangerBtn]',
  exportAs: 'ntDangerBtn'
} )
export class DangerBtnDirective {

  @HostBinding ( 'style.backgroundColor' )
  backgroundColor = 'red';
  //
  // @HostBinding('style.fontSize')
  // fontSize = 'larger';

  @HostBinding ( 'style.fontWeight' )
  fontWeight = 'bolder';

  @Output()
  confirmed: EventEmitter<undefined> = new EventEmitter ();

  @Input()
  ntDangerBtn: string;

  @Input()
  ntDangerBtnSaban: string;

  constructor( private elemeRef: ElementRef,
               private tempRef: TemplateRef<any>,
               private viewRef: ViewContainerRef) {
    console.log ( elemeRef );
  }

  @HostListener ( 'click' )
  click() {
    const msg = !!this.ntDangerBtn ? // 'inhalt' .. truthy ... !false ... !!true
      this.ntDangerBtn :
      'willst du das wirklich machen';
    if ( confirm ( msg ) ) {
        this.confirmed.emit();
    }
  }
}
