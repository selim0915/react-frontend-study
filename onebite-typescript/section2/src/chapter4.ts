type User = {
  id: number;
  name: string;
  nickname: string;
  age: number;
};

// type User = { // 같은 scope내 변수는 타입을 중복이 안 된다.
//   id: number;
//   name: string;
//   hobby: string;
// };

function newUser() {
  type User = {
    // 다른 타입에 별칭을 재정의 하는 가능하다.
    id: number;
    name: string;
    hobby: string;
  };

  let user4: User = {
    id: 1,
    name: "kim",
    hobby: "love",
  };
}

let user2: User = {
  id: 1,
  name: "kim",
  nickname: "kimm",
  age: 20,
};

let user3: User = {
  id: 2,
  name: "park",
  nickname: "parkk",
  age: 22,
};

user1.id;
user1.name;

// 인덱스 시그니처
type Codes = {
  ko: string; // ko 무조건 지정
  [key: string]: string;
};
// type Codes2 = {
//   ko: string; // error - 인덱스 시그니처의 값과 타입은 동일해야 한다.
//   [key: string]: number;
// };

let country1: Codes = {
  ko: "ko",
  en: "en",
  vi: "vit",
};

// let country2: Codes = {}; // error - ko 값이 없다.
