import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[msgTemp]'
})
export class TempDirective {

  @Input() msgTemp;
  constructor( ) { }

}
