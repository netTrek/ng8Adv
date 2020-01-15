import { Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'nt-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss']
})
export class TemplateOutletComponent implements OnInit {

  @ContentChild ( TemplateRef, {static: true} )
  viaContentChild: TemplateRef<any>;

  @ViewChild( 'viewContRef', {static: true, read: ViewContainerRef} )
  viewContRef: ViewContainerRef;

  constructor() { }

  ngOnInit() {
    this.viewContRef.createEmbeddedView(
      this.viaContentChild,
      { $implicit: 'Saban Ünlü' }
    )


  }

}
