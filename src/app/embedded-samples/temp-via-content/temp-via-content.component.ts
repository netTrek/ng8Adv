import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentTempComponent } from '../content-temp/content-temp.component';
import { TempDirective } from '../temp.directive';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component ( {
  selector   : 'msg-temp-via-content',
  templateUrl: './temp-via-content.component.html',
  styleUrls  : [ './temp-via-content.component.scss' ]
} )
export class TempViaContentComponent implements OnInit, AfterContentInit {

  @ContentChild ( TempDirective, { static: true, read: TemplateRef } )
  tempDir: any;

  @ContentChild ( 'renderer', { static: true, read: TemplateRef } )
  renderer: any;

  @ViewChild ( 'target', { static: true, read: ViewContainerRef } )
  container: ViewContainerRef;

  @ViewChild ( 'listTarget', { static: true, read: ViewContainerRef } )
  listTarget: ViewContainerRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {

    console.log ( this.container, this.tempDir );

    for ( let i = 1; i < 3; i ++ ) {
      this.container.createEmbeddedView( this.tempDir, {$implicit: `imp${i}`, val: `val${i}`} );
      this.listTarget.createEmbeddedView( this.renderer, {$implicit: `imp${i}`, val: `val${i}`} );
    }

  }

}
