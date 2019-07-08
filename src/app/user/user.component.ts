import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';
import { interval, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent
  implements OnInit, AfterViewInit,
              OnDestroy {

  @ViewChild ( 'stat', {static: true } )
  stat: ElementRef<HTMLElement>;

  @ViewChildren( UserIconComponent )
  icons: QueryList<UserIconComponent>;
  show: any;

  html = `hello <strong>world</strong><script>alert('hello');</script>`;

  width = 10;

  private sub: Subscription;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
    console.log ( this.stat );
    // nur nur nur nur nur nur
    // wie nie SSR geplant ist!
    // this.stat.nativeElement.setAttribute( 'style', 'background-color: red');
    this.renderer.setStyle( this.stat.nativeElement, 'color', 'red');
    interval( 1000 )
      .pipe(
        mapTo ( true ),
        first()
        // take ( 3 )
      ).subscribe( value => {
      this.show = value;
    });
  }

  ngAfterViewInit(): void {
    console.log ( this.icons.toArray() );
    this.sub = this.icons.changes
        .subscribe( value => console.log ( value) );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
