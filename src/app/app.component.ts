import { Component } from '@angular/core';

@Component({
  selector: 'nt-root',
  template: `
    <nt-template-outlet>
        <ng-template let-name>user {{name}}</ng-template>
    </nt-template-outlet>
    <nt-use-struc-dir></nt-use-struc-dir>
  `,
  styles: []
})
export class AppComponent {
}
