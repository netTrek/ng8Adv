import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  constructor( private $loading: LoadingService ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.$loading.add();
    return next.handle( req ).pipe(
      tap( v => this.$loading.remove(),
          v => this.$loading.remove() )
    );
  }
}
