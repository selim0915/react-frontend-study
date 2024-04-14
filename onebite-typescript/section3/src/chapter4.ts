// 타입 추론
let l1 = 10;
let l2 = "a";
let l3 = {
  id: 1,
  name: "kim",
  profile: {
    address: "seoul",
  },
  url: ["www", "www2"],
};

let { id, name } = l3;

let [a, b, c] = [1, 'a', true];

function func (msg = 'hi') {
    return msg;
}

// 암묵적 any타입: 타입지정을 하지않고 초기화도 하지 않는 변수, 특정 구간내에서만 타입을 가지고 진화할 수 있다.
let d; // any
d =10; // number
d.toFixed();

d ='a'; // string
d.split('a');

// let, const
let n1 = 10; // type : number
const n2 = 10; // type : literal 10
