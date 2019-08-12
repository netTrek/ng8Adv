/**
 * Bitte in Playgroud nutzen
 * http://www.typescriptlang.org/play/?noImplicitAny=false&target=1
 */

/* tslint:disable */



const val1 = 1;
const val2 = 2;
const val3 = 'hello';

let valObj: any = { val1, val2, val3 };


let list1 = [1,2,3];
let list2 = [4,5,6]
let list3 = [...list1, 5,5,5,5, ...list2]

let user: User = {
  age: 44, name: 'saban'
}

const {age} = user;

let copy = { ... user };

let newObj = { bool: true , ...user }


// let myFunc = function ( ) {
//    console.log ( 'do myFunc');
// }

let oldSchool = function ( param: any ) {
  return param + ' hello';
}
/*
let myFunc = () => {
    console.log ( 'do myFunc');
}

// mit einem Param
let myFunc = param => {
    console.log ( 'do myFunc', param );
}
*/
// mit einem Param und Rückgabe
let myFunc = param => param + ' hello';

myFunc ( 'Asd ');


document.getElementsByTagName ('Button')[0].addEventListener ('click', function ( event ) {
  // arebite mit dem Event
});


class NavButton {
  constructor ( private navBtn: HTMLButtonElement ) {
    this.init();
  }
  // <Button onclick="functioNam()">

  private init () {
    /*
    let _this = this;
    this.navBtn.addEventListener ( 'click' , function ( event ) {
    console.log ( _this );
    });
    */

    this.navBtn.addEventListener ( 'click' , event => {
      console.log ( this );
    });
  }
}




abstract class MyAbs {
  do () {
    console.log ( 'do....');
  }
}

// let abs: MyAbs = new MyAbs ();
class UseAbs extends MyAbs {

}
let useAbs: UseAbs = new UseAbs ();




interface User {
  name: string;
  age: number;
  address?: string; // optional
}

interface Prod {
  name: string;
  uuid: number;
  calcPrice (): number;
}

class Car implements Prod {
  name = 'audi';
  uuid = 123434213;
  calcPrice (): number {
    return 12;
  }
}

class Clock implements Prod {
  name = 'swatch';
  uuid = 123434213;
  calcPrice (): number {
    return 13;
  }
}

class ProductList {
  constructor ( protected products: Prod[] ){

  }
}

let list = new ProductList ( [ new Car (), new Clock () ] );

class Saban {

  /*
  private pro: string | undefined;
  constructor ( paramPro: string ) {
      this.pro = paramPro;
  }
  */

  private _myVar: string | undefined;

  set myVar ( value: string ) {
    this._myVar = value;
  }


  get myVar ( ): string {
    return this._myVar as string;
  }

  protected protectedProp: string | undefined;

  constructor ( private pro: string ) {

  }

  // gültigkeiten public, private, protected - def.: public
  public methode ( parma2: number, param1: string = 'default' ) {

  }

  // drei punkte für Rest-Parameter
  public methode2 ( parma1: number, ...users: User[] ) {
    console.log ( users[0] );
  }

  public methode3 ( parma1: number,rest: string[] ) {
    console.log ( rest[0] );
  }
}


class Peter extends Saban {
  constructor ( param: string ) {
    super( param );
    this.protectedProp = 'das'
  }

  methode ( param2: number, param1: string = 'default' ) {
    // mach was anderes als in Saban;
    super.methode ( param2, param1 );
  }
}

let saban: Saban = new Saban ( 'hello' );
// saban.pro = 'hallo';
saban.methode( 123 );
saban.methode2 ( 123, <User> {age: 44, name: 'saban'} );
saban.methode2 ( 123, {age: 44, name: 'saban'} as User );
saban.methode3 ( 123, ['hallo', 'welt'] );











// let username: string = 'saban';
let username = 'saban';
// username = 123; // typenwechsel nicht erlaubt

const myVar = 123;
// myVar = 344; // nicht zu überschreiben

// let varname: string | number;

// let varname_str

// native typen
let nativeT: number | string | boolean;

let bitteNicht: any;



