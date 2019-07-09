import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive ( {
  selector: '[msgMachWas2]'
} )
export class MachWas2Directive implements OnChanges {

  @Input()
  selectedColor = 'red';

  constructor( private elemRef: ElementRef, private renderer: Renderer2 ) {
    console.log ( this.elemRef );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log ( changes );

  }

}
