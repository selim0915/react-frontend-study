// enum
enum Rloe {
  admin = 0,
  user = 1,
}
const user4 = {
  name: "kim",
  rloe: Rloe.admin,
};
const user5 = {
  name: "lee",
  rloe: Rloe.user,
};
const user6 = {
  name: "park",
  rloe: Rloe.user,
};

enum Index {
  start = 10,
  next = 1,
}

console.log(Index.next); // 11
// enum은 값이 없는 경우 자동으로 1씩 값이 증가되어 할당된다.