import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ntRole]'
})
export class RoleDirective implements OnInit{

  @Input() ntRole: any;
  @Input() ntRoleLast: any;
  constructor( private tempRef: TemplateRef<any>,
               private viewRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewRef.createEmbeddedView( this.tempRef );
  }

}
