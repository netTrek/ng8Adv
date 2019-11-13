import { Directive, OnInit } from '@angular/core';
import { DangerBtnDirective } from './danger-btn.directive';

@Directive({
  selector: 'button[rpBrother][rpDangerBtn]'
})
export class BrotherDirective implements OnInit {

  constructor( private dangerBtn: DangerBtnDirective ) {
  }

  ngOnInit(): void {
    this.dangerBtn.backgroundColor = 'orange';
  }

}
