// 조건부 타입 소개
// 1. 기본 타입
type A = number extends string ? number : string;

// 2. 객체 타입
type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};
type B = ObjB extends ObjA ? number : string;

// 3. 제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 유니온 타입
// function removeSpaces(text: string | undefined | null) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   } else {
//     return undefined;
//   }
// }

// 조건부 타입
// function removeSpaces<T>(text: T): T extends string ? string : undefined {
//   if (typeof text === "string") {
//     // return text.replaceAll(" ", ""); // error - 함수 내부에서는 조건부 타입 결과를 알지 못함
//     return text.replaceAll(" ", "") as any;
//   } else {
//     // return undefined; // error
//     return undefined as any;
//   }
// }

// 조건부 타입 + 오버로드 시그니쳐 추가
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();
let result2 = removeSpaces(undefined);