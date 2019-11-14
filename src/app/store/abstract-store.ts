import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, skipWhile, switchMap, tap } from 'rxjs/operators';

export abstract class AbstractStore<T> extends BehaviorSubject<T> {

  select<U>( key: (keyof T), ignoreUndefined = true ): Observable<U> {
    return this.pipe (
      map( value => {
        return value[key as string];
      } ),
      skipWhile ( value => ignoreUndefined && !value )
    );
  }

  setValue( key: (keyof T), value: any ) {
    // this.next( { ...this.value, [key]: value } );
    let valOb: Observable<any>;
    if ( value instanceof Observable ) {
      valOb = value;
    } else {
      valOb = of ( value );
    }
    valOb.subscribe( input => {
      this.next( { ...this.value, [key]: input } );
    });
  }
}
