import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
  // , pure: false - z. B. für async
})
export class ReversePipe implements PipeTransform {

  transform(value: string, prefix: string = ''): any {
    return (prefix + value).split('').reverse().join('');
  }

}
