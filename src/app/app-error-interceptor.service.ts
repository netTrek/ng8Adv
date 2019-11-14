import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    return next.handle( req ).pipe(
      tap(
        () => {},
        () => alert ('ups .... da ist was schiefgelaufen' )
        )
    );
  }
}
