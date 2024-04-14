// 합집합 - union
let a: string | number;
a = 1;
a = "a";

let arr: (number | boolean)[] = [1, true];

type User = {
  name: string;
  age: number;
};
type Animal = {
  name: string;
  kind: string;
};
type Union1 = User | Animal;
let user1: Union1 = {
  name: "kim",
  age: 20,
};
let dog1: Union1 = {
  name: "choco",
  kind: "dog",
};
let cat1: Union1 = {
  name: "choco",
  age: 10,
  kind: "cat",
};
// let mouse: Union1 = {
//   name: "choco", // error - 필수 속성이 없으면 오류
// };

// 교집합 - intersection
let variable: number & string;
// variable = 1; // error - variable는 nerver 타입이다.

type intersection = User & Animal;
// let user2: intersection = { // error
//   name: "kim",
//   age: 20,
// };
// let dog2 intersection = { // error
//   name: "choco",
//   kind: "dog",
// };
let cat2: intersection = {
  name: "choco",
  age: 10,
  kind: "cat",
};