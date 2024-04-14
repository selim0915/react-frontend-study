// void
function func1():string {
    return "hi";
}

function func2():void {
  console.log('hi')
}

function fun3():void { // void는 값을 반환 값이 없는 함수라는 뜻이고 undefined만 리턴 가능하다.
  // let result = "a";
  // let result = boolean;
  // let result = {};
  // let result = null;
  let result; // undefined
  return result;
}

// never
function fun4(): never {
  while (true) {}
}
function fun5(): never {
  throw new Error();
}

let a: never;
let b: any;
// a = 1; // error
// a = 'a'; // error
// a = ()=> {}; // error
// a = null; // error
// a = undefined; // error
// a = b; // error