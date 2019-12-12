import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string|any[], prefix?: string|any[]): string|any[] {
    if ( Array.isArray( value )) {
      return [...(prefix || []), ...value.reverse()];
      // if ( !! prefix ) {
      //   return [...prefix, ...value.reverse()];
      // }
      // return value.reverse();
    } else {
      return (prefix || '') + value.split('').reverse().join('');
      // if ( !! prefix ) {
      //   return prefix + value.split('').reverse().join('');
      // }
      // return value.split('').reverse().join('');
    }
    return value;
  }

}
