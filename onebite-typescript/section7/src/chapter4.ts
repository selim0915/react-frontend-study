// 제너릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};
let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처와 같이 사용하기
interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};
let booleanMap: Map<boolean> = {
  key: true,
};

// 타입 별칭으로 제너릭 지정
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "string",
};

// 활용
interface Developer {
  type: "developer";
  skill: string;
}
// interface User {
//   name: string;
//   profile: Student | Developer;
// }
interface User<T> {
  name: string;
  profile: T;
}

function func(user: User<Developer>) {
  console.log(`${user.profile.type} study`);
}

// const developerUser: User = {
//   name: "kim",
//   profile: {
//     type: "developer",
//     skill: "typescript",
//   },
// };
const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};
