// 타입 좁히기
type Person = {
  name: string;
  age: number;
};

function func(val: number | string | Date | null | Person) {
  if (typeof val === "number") {
    val.toFixed();
  } else if (typeof val === "string") {
    val.toLowerCase();
  } else if (val instanceof Date) {
    val.getTime();
  } else if (val && "age" in val) {
    console.log(val.name + val.age);
  }
}
