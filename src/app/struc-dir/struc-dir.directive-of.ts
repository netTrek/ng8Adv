import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class MyContext {
  constructor ( public $implicit: any,
                public index: number = -1,
                public count: number = -1
  ) {  }

  get first(): boolean { return this.index === 0; }

  get last(): boolean { return this.index === this.count - 1; }

  get even(): boolean { return this.index % 2 === 0; }

  get odd(): boolean { return !this.even; }
}
@Directive ( {
  selector: '[ntStrucDir][ntStrucDirOf]'
} )
export class StrucDirDirectiveOf  {
  @Input()
  set ntStrucDirOf ( value: Array<any> | Iterable<any> ) {
    this.update( value );
  }

  constructor ( private templateRef: TemplateRef<MyContext>,
                private viewContainerRef: ViewContainerRef ) {
  }

  private update ( value: Array<any> | Iterable<any> ) {

    this.viewContainerRef.clear();

    for ( const $implicit of value ) {
      this.viewContainerRef.createEmbeddedView( this.templateRef,
        new MyContext( $implicit )
      )
    }
    for ( let i = 0; i < this.viewContainerRef.length; i++ ) {
      const ref = <EmbeddedViewRef<MyContext>>this.viewContainerRef.get( i );
      ref.context.index = i;
      ref.context.count = this.viewContainerRef.length;
    }
  }
}
