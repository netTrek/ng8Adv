import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive ( {
  selector: '[msgMachWas]'
} )
export class MachWasDirective implements OnChanges {

  @Input ()
  msgMachWas = false;

  @Input()
  selectedColor = 'red';

  constructor( private elemRef: ElementRef, private renderer: Renderer2 ) {
    console.log ( this.elemRef );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    // falls nur machWas als Input benötigt ist
    // this.renderer.setStyle (
    //   this.elemRef.nativeElement,
    //   'color',
    //   changes.msgMachWas.currentValue === true ? 'red' : 'black' );
    //
    this.renderer.setStyle (
      this.elemRef.nativeElement,
      'color',
      this.msgMachWas === true ? this.selectedColor : 'black' );

  }

}
