type Info1 = { // super
  name: string;
  age: number;
}

type Info2 = { // sud : 추가 속성을 가지고 있다.
  name: string;
  age: number;
  address: string;
};

let p1: Info1 = {
  name: "kim",
  age: 20,
};

let p2: Info2 = {
  name: "kim",
  age: 20,
  address: "seoul",
};

p1 = p2;
// p2 = p1; // error - 객체 속성에 없는 키 값을 가지고 있기때문에