import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RuntimeComponent } from './runtime/runtime.component';

@Component ( {
  selector   : 'msg-dyn-comp',
  templateUrl: './dyn-comp.component.html',
  styleUrls  : [ './dyn-comp.component.scss' ]
} )
export class DynCompComponent implements OnInit {

  dynComp = RuntimeComponent;

  @ViewChild ( 'target', { static: true, read: ViewContainerRef } )
  target: ViewContainerRef;

  constructor( private factoryResolver: ComponentFactoryResolver,
               private vcRef: ViewContainerRef ) {
  }

  ngOnInit() {
    const compFactory: ComponentFactory<RuntimeComponent> =
            this.factoryResolver.resolveComponentFactory ( RuntimeComponent );

    this.target.createComponent ( compFactory );
  }

}
