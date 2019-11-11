
let person = { name: 'saban', age: 123 };

let prefix = 'hello';
let prefix2: string = 'hallo';

// prefix = 222 // darf keine zahl sein

function sagHallo ( firstname ) {
  let prefix = 'hallo';
  return prefix + ' ' + firstname // hallo Saban
}

let test = prefix + 'saban'; // hellosaban

const age = 123;
// age = 111; // nicht überschreibar

for (let i = 0; i < 10; i++) {
  console.log(i);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
// console.log(i);

let date: Date = new Date();
let list: string[] = ['22', '222'];
let list2: (string | number)[] = ['22', '222', 222];
let list3: any[] = ['22', '222', 222];

interface IPerson {
  name: string,
  age: number,
  zip?: number
}

let person2: {
  name: string,
  age: number,
  zip?: number
} = { age: 12, name: 'sa' };

let person3: IPerson= { age: 12, name: 'sa' };

interface IHuman {
  zip: number;
  sayHello(): void;
  sayYourName(): string;
}


class Human implements IHuman {
  zip: number;

  private _name: string;
  // private age: number;
  constructor(
    name: string,
    private age: number
  ) {
    this.name = name;
    // this.age = age;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  sayHello() {
    console.log(this.name);
  }

  sayHello1(prefix: string) {
    console.log(prefix + ' ' + this.name);
    console.log(`${prefix} ${this.name}`);
  }

  sayHello2 (prefix: string, val? : string ) {
    console.log(prefix + ' ' + this.name);
    console.log(`${prefix} ${this.name}`);
  }

  sayHello3 (prefix: string, val: string = 'saban') {
    console.log(prefix + ' ' + this.name);
    console.log(`${prefix} ${this.name}`);
  }

  sayHello4 (prefix: string, ...vals: string[]) {
    console.log(prefix + ' ' + this.name);
    console.log(`${prefix} ${this.name}`);
  }
  sayYourName(): string {
    throw new Error("Method not implemented.");
  }

}

class Man extends Human {
  constructor(name: string, age: number) {
    super(name, age);
  }

  sayHello( ) {
    super.sayHello();
    console.log(this.name);
  }
}

let man: Man = new Man('saban', 44);
man.sayHello();
man.name = 'saba';
console.log('hello ' + man.name)
man.sayHello4('ss', '2', 'saban');

abstract class MyAbs {
  constructor() { }
  do() {
    console.log('do');
  }
}

// let m = new MyAbs();
class UseAbs extends MyAbs {

}
let u: UseAbs = new UseAbs();


function func1() {
  console.log('func');
}

let arr1 = () => {
  console.log('func');
}

function func2( param ) {
  console.log('func' + param );
}

let arr2 = param => {
  console.log('func' + param );
}

function func3( param1, param2 ) {
  console.log('func' + param1 + param2 );
}

let arr3 = (param1,param2) => {
  console.log('func' + param1 + param2 );
}

function func4( param ) {
  return 'func' + param;
}

// let arr4 = param => {
//    return 'func' + param;
//}
let arr4 = param => 'func' + param;

function func5(  ) {
  return 'func';
}

let arr5 = () => 'func';
let arr6 = _ => 'func';
// <button id='myBtn' onclick="fu">
class NavBtn {
  btnType = 'navButton';
  clientX: number;
  constructor(private btn: HTMLButtonElement) {
    this.init();
  }
  private init() {
    this.addListener();
  }
  private addListener() {
    this.btn.addEventListener('click',
      mouseevent => this.clientX = mouseevent.clientX
    )
  }
}
const navBtn: NavBtn = new NavBtn(
  document.getElementById('myBtn') as HTMLButtonElement);


let l1 = [1, 2, 3, 4, 5];
let cloneFromL1 = [...l1];
let extL1 = [...l1, 6, 7, 8];

let address = { str: 'overberg', city: 'dorsten' };
let cloneAdd = { ...address };
let extAdd = { ...address, zip: 46282 };
let overAdd = { ...address, str: 'hansa' };

let db = { col1: 'dasd', col2: 'dasd', col3: 'dasd' }
const { col2 } = db;
console.log(col2);
