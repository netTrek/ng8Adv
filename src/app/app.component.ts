import { Component } from '@angular/core';

@Component({
  selector: 'nt-root',
  template: `
    <nt-counter></nt-counter>
    <nt-score></nt-score>
    <nt-user></nt-user>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngrx-sample';
}
