// 인터페이스
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "kim",
  sayHi: function () {
    console.log("sayHi");
  },
};
// person.name = "홍길동"; // error - 할당 값 수정 불가
person.sayHi();

// interface Person { // 인터페이스는 | 연산자로 타입 지정 안됨
//   name: string;
//   age: number;
// } | number