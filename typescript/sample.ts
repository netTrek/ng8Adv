
let list1: number[] = [1, 2, 3];
let cloneList1 = [...list1];
let list2: number[] = [4, 5, 6];
let list3 = [...list1, ...list2];
let list4 = [...list1, 7, 8, 9, ...list2];

let pers = { name: 'saban', age: 44 };
let address = { city: 'dorsten', zip: 46282 };
let clonePers = { ...pers };
let modPers = { ...pers, age: 33 };
let persSaban = { ...pers, ...address };

let city = 'Dorsten';
let zip = 46282;

// let address2 = { city: city, zip: zip };
let address2 = { city, zip };

let resp = { val1: 1, val2: 2, val3: 3 };
let { val2, val1 } = resp;

function sagHallo() {
  console.log('hallo');
}

var sagHallo2 = function () { };

// function arrow2(param1) {
//    console.log(param1);
// }
// function arrow4(param1) {
//    return param1 * 10;
//}

let arrow1 = () => { console.log('hello arrow') };
let arrow2 = param1 => { console.log(param1) };
let arrow3 = (param1, param2) => {
  console.log(param1, param2);
};
let arrow4 = param1 => param1*10;
arrow1();

class NavButton {
  testPro = 123;
  constructor(private btn: HTMLButtonElement) {
    this.init();
  }
  private init() {

    this.btn.addEventListener('click',  () => {
      // top.location.href = 'https://netTrek.de';
      console.log(this.testPro);
    })
  }
}

let navBtn = new NavButton(
  document.getElementById('myBtn') as HTMLButtonElement);

var werbinich = 'saban';

for (let i = 0; i < 10; i++) {
  console.log(i);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

// const j = 123;
// j = 222;


let typingTest: string = 'Saban';
typingTest = 'ünlü';
// typingTest = 123;

let myDate: Date;
myDate = new Date();

class Human {
  static TYPE = 'human'
  private _color: string;

  set color( color: string ) {
    this._color = color;
  }
  get color(): string {
    return this._color;
  }

  // name: string;
  // private age: number;
  constructor(public name: string,
              /*city: string, */
              private age: number) {
    // this.name = name;
  }

  // sayYourName(prefix?: string) { // optional
  sayYourName( prefix: string = '') { // optional
    console.log( prefix + '' + this.name);
  }

  setNames( num: number, ...name: string[] ) {

  }

  protected sayHello() {
    console.log('hello');
  }
}
console.log(Human.TYPE);
let saban: Human = new Human('saban', 44);
saban.setNames ( 123, 'saban', 'peter', 'sana' )
saban.sayYourName();
console.log(saban.color);
saban.color = 'red';
// saban.sayHello ()

interface IHuman {
  name: string;
  // age: number;
  color?: string;
  sayYourName( prefix: string ): void;
}

class Man extends Human implements IHuman {
  constructor(name: string, age: number) {
    super(name, age);
    this.sayHello();
  }

  sayYourName() {
    super.sayHello( );
  }
}

























