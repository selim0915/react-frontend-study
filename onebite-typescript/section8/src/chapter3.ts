// 맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

// type PartialUser = { // 중복 프로퍼티를 작성
//   id?: number;
//   name?: string;
//   age?: number;
// }
type PartialUser = {
  // [key in "id" | "name" | "age"]?: User[key];
  [key in keyof User]?: User[key];
  // readonly [key in keyof User]?: User[key];
};

function updateUser1(user: User) {
  console.log(user)
}
function updateUser2(user: PartialUser) {
  console.log(user)
}

// updateUser1({
//   age: 25 // error - User의 id, name 없음
// });
updateUser2({
  age: 25
});