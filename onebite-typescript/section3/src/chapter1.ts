// unknow
function unknowEx() {
  let a: unknown = 1;
  let b: unknown = "a";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = () => {};
}

// never
function neverEx() {
  function func(): never {
    throw new Error();
  }

  let a: number = func();
  let b: string = func();
  let c: boolean = func();
  //   let d: never = 10; // error - up cast
  //   let e: never = "a"; // error - up cast
  //   let f: never = true; // error - up cast
}

// void
function voidEx() {
  function func(): void {
    console.log("hi");
  }

  let a: void = undefined;
  // let b: number = undefined; // error - up cast
}

// any
function anyEx() {
  let a: any;
  let b: number = 1;
  b = a; // any는 down cast에 영향을 받지 않는 특이 케이스

  let c: never;
  // c = a; // error - 단 never 제외
}
