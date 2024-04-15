// 함수 타입 표현식
type Operation = (a:number, b:number) => number;

// function func(a: number, b: number): number {}
// const func: (a: number, b: number) => number = (a, b) => a + b;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b; // 재사용 가능

// 호출 시그니처
type Operation2 = {
  (a: number, b: number): number;
}
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b; 