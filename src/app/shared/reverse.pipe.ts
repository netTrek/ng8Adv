import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
  // , pure: false // sync - keine Singleton
})
export class ReversePipe implements PipeTransform {

  transform(value: any, prefix: string = ''): any {
    return prefix + value.split ('').reverse().join('');
  }

}
