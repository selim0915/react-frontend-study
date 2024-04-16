// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // number
let b: StringNumberSwitch<string>; // string
let c: StringNumberSwitch<number | string>; // string | number
let d: StringNumberSwitch<boolean | number | string>; // string | number

// Exclude(제외하다) 조건부 타입 구현하기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | boolean // never는 유니온타입 사용 시 타입에서 없어진다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // string

// 조건부 타입을 분산적으로 사용하고 싶지 않은 경우
// 타입에 [] 배열로 감싸주면 된다.
type Extract2<T, U> =  [T] extends [U] ? T : never;

type C = Extract2<number | string | boolean, string>; // never // 첫번째 변수만 결과로 조회 됨
