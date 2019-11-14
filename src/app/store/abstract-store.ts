import { BehaviorSubject, Observable } from 'rxjs';
import { map, skipWhile, switchMap, tap } from 'rxjs/operators';

export abstract class AbstractStore<T> extends BehaviorSubject<T> {

  getKey<U>( key: (keyof T), ignoreUndefined = true ): Observable<U> {
    return this.pipe (
      map( value => {
        return value[key as string] as U;
      } ),
      skipWhile ( value => ignoreUndefined && !value )
    );
  }

  // getKey<ExportType, propName extends keyof T>( key: propName, ignoreUndefined = true ): Observable<ExportType> {
  //   return this.pipe<ExportType> (
  //     map<any, ExportType>( value => {
  //       return value[key];
  //     } ), // userList
  //     // skipWhile ( value => ignoreUndefined && !value )
  //   );
  // }

  setValue( key: (keyof T), value: any ) {
    this.next( { ...this.value, [key]: value } );
  }
}
