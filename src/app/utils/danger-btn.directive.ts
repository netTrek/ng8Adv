import { Directive } from '@angular/core';

@Directive({
  // selector: 'button[rpDangerBtn], div[rpDangerBtn]'
  selector: 'button[rpDangerBtn]'
})
export class DangerBtnDirective {

  constructor() {
    console.log ( 'hello world' );
  }

}
