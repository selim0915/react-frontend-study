// 제너릭
function func1(value: unknown) {
  return value;
}
let num1 = func1(10);
// num1.toFixed(); // error - unknown 연산 불가
if (typeof num1 === "number") {
  num1.toFixed();
}
let str1 = func1("string");
// str.toUpperCase(); // error - unknown 연산 불가

// 제너릭 함수
function func2<T>(value: T): T {
  return value;
}
let num2 = func2(10);
num2.toFixed();
let str2 = func2("string");
str2.toUpperCase();
let arr = func2<[number, number, number]>([1, 2, 3]);