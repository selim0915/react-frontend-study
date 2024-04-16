// keyof 연산자
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "이정환",
  age: 27,
};

// function getPropertyKey(person: Person, key: "name" | "age") {
//   return person[key];
// }
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}
getPropertyKey(person, "name");


// Typeof와 Keyof 함께 사용하기
type Person2 = typeof person; 

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}
