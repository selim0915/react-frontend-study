// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["a", "b", "c"];

let boolArr1: boolean[] = [true, false, true];
let boolArr2: Array<boolean> = [true, false, true];

let allArr: (string | number | boolean)[] = [1, "a", true];

// 2차원 배열
let arr1: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3] // type error
// tup1 = ['1', '2'] // type error

const user: [string, number][] = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  // [4, "d"], // type error
];
