import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive ( {
  selector: '[ntStrucDir][ntStrucDirOf]'
} )
export class StrucDirDirective  {
  @Input()
  set ntStrucDirOf ( value: Array<any> | Iterable<any> ) {
    this.update( value );
  }

  constructor ( private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef ) {
  }

  private update ( value: Array<any> | Iterable<any> ) {
    this.viewContainerRef.clear();
    for ( const $implicit of value ) {
      this.viewContainerRef.createEmbeddedView( this.templateRef,
        { $implicit }
      )
    }
  }
}
