// 함수 타입 기본 정의
function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name: string, age: number, tall?: number) {
  console.log(name);
  if (typeof tall === "number") {
    console.log(tall + 10);
  }
}
introduce("kim", 20, 180);
introduce("kim", 20);

function getSum(...rest: number[]) {
// function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((v) => (sum += v));

  return sum;
}
getSum(1, 2, 3);
