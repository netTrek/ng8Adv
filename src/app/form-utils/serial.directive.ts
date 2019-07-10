import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Directive ( {
  selector: '[msgSerial]', providers: [ {
    provide    : NG_VALUE_ACCESSOR,
    useExisting: forwardRef ( () => SerialDirective ),
    multi      : true
  }
  ]
} )
export class SerialDirective implements ControlValueAccessor {
  private onTouched: any;
  private onChange: any;

  constructor( private renderer: Renderer2, private elemRef: ElementRef ) {
  }

  registerOnChange( fn: any ): void {
    this.onChange = fn;
  }

  registerOnTouched( fn: any ): void {
    this.onTouched = fn;
  }

  writeValue( value: string ): void {
    if ( !isNullOrUndefined ( value ) ) {
      this.renderer.setProperty ( this.elemRef.nativeElement, 'value',
        value.replace ( /\-/g, '' )
             .replace ( /(.{3})/g, '$1-' ) );
    }
  }

  @HostListener ( 'blur' )
  blur() {
    if ( !!this.onTouched ) {
      this.onTouched ();
    }
  }

  @HostListener ( 'change', [ '$event' ] )
  valueChange( $event ) {
    this.writeValue ( $event.target.value );
    if ( !!this.onChange ) {
      this.onChange ( $event.target.value.replace ( /\-/g, '' ) );
    }
  }

}
