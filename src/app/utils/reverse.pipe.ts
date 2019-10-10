import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'reverse'
} )
export class ReversePipe implements PipeTransform {

  transform( value: string | any[], prefix?: string ): any {
    if ( Array.isArray ( value ) ) {
      if ( prefix ) {
        value = [ ...value, prefix  ];
      }
      return value.reverse ();
    }
    if ( typeof value === 'string' ) {
      if ( prefix ) {
        value = `${prefix}${value}`;
      }
      return value.split ( '' )
                  .reverse ()
                  .join ( '' );
    }
    return value;
  }

}
