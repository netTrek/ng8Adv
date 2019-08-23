import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppTokenInterceptorService implements HttpInterceptor {

  constructor( private $user: UserService ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if ( this.$user.token && req.method !== 'GET' ) {
      req = req.clone(
        {setHeaders: {authorization: `Bearer ${this.$user.token}`} }
      );
      debugger;
    }
    return next.handle( req );
  }
}
