import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe ( {
  name: 'reverse'/*,
  pure: false*/
} )
export class ReversePipe implements PipeTransform {

  constructor() {
    /*console.log ( '123' );*/
  }

  // jeder eigehende String soll umgedreht angezeigt werden! - array (op number, string)
  transform( value: string | number | any[], ...args: any[] ): any {
    /*console.log ( 'val', value );*/
    if ( isArray ( value ) ) {
      return (value as Array<any>).reverse ();
    } else if ( !isNaN ( Number ( value ) ) || typeof value === 'string' ) {
      return (value + '').split ( '' )
                         .reverse ()
                         .join ( '' );
    }
    return value;
  }

}
