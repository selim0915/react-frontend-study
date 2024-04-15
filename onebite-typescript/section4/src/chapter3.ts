// 함수 타입 호환성

// 1. 반환값 호환성
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // error - 반환값이 Down Cast 인경우는 호환되지 않는다.

// 2. 매개변수 호환성
// 2.1. 매개변수 갯수가 같음
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // error - 매개변수가 Up Cast 인경우는 호환되지 않는다.
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // error - 매개변수가 Up Cast 인경우는 호환되지 않는다.
dogFunc = animalFunc;

// 2.2. 매개변수 갯수가 다름
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // error - 매개변수가 적은 타입으로만 호환이 가능하다.