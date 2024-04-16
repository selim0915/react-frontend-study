// 1 :  2개의 타입을 사용하는 경우
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

// 2 : 다양한 배열 타입을 인수로 받는 경우
function returnFirstValue1<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue1([0, 1, 2]); // number
let str = returnFirstValue1([1, "hello", "mynameis"]); // number | string

// 3 : 첫번째 요소만 타입을 사용하고, 나머지는 상관 없는 경우
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let str2 = returnFirstValue2([1, "hello", "mynameis"]); // number

// 4 : 타입 변수 제한하는 경우
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(undefined); // error - T가 length를 가지고 있지 않아서
// getLength(null); // error - T가 length를 가지고 있지 않아서