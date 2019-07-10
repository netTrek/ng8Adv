import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'msg-embedded-samples',
  templateUrl: './embedded-samples.component.html',
  styleUrls: ['./embedded-samples.component.scss']
})
export class EmbeddedSamplesComponent implements OnInit {

  @ViewChild ( 'hr', {static: true, read: TemplateRef} )
  private hr: TemplateRef<HTMLHRElement>;

  @ViewChild ( 'hr', {static: true, read: ViewContainerRef} )
  private viewContainerRef: ViewContainerRef;

  // constructor( private viewContainerRef: ViewContainerRef ) { }
  constructor( /*private viewContainerRef: ViewContainerRef*/ ) { }

  ngOnInit() {
    console.log ( this.hr );
    this.viewContainerRef.createEmbeddedView( this.hr );
  }

}
