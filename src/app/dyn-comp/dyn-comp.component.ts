import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { MyEntryComponent } from './my-entry/my-entry.component';

@Component ( {
  selector       : 'nt-dyn-comp',
  templateUrl    : './dyn-comp.component.html',
  styleUrls      : ['./dyn-comp.component.scss'],
  entryComponents: [MyEntryComponent]
} )
export class DynCompComponent implements OnInit {

  entryCompClass = MyEntryComponent;

  constructor (
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit () {
    const compFactory: ComponentFactory<MyEntryComponent> =
            this.componentFactoryResolver
                .resolveComponentFactory ( MyEntryComponent );

    this.viewContainerRef.createComponent ( compFactory );
  }

}
