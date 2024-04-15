// 인터페이스 합치기
interface Person {
  name: string;
}

interface Person {
  // name: number; // error - 프로퍼티가 중복되는 별칭은 타입이 다르면 오류가 발생한다.
  age: number;
}

const person: Person = { // merge
  name: "kim",
  age: 27,
};