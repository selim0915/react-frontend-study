// 타입 단언
type User = {
  name: string;
  age: number;
};

let person = {} as User;
person.name = "kim";
person.age = 20;

let num1 = 10 as number;
let num2 = 10 as never;
let num3 = 10 as unknown;
// let num4 = 10 as string; // error - 타입 교집합이 없는 타입이라 오류
let num4 = 10 as unknown as string;
let num5 = 10 as const;

let cat = {
  name: 'bebe',
  age: 13
} as const // 프로퍼티 값을 바꾸고 싶지 않는 객체에 사용

// non null (!)
 type Post = {
  title: string;
  author?: string;
 }

let post: Post = {
  title: '글1',
  author: '작성자1' // optional channing
};
const len: number = post.author!.length;
