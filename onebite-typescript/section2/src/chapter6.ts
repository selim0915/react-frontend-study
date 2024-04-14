// any
let anyVar1 = 10;
// anyVar = "10"; // error - 초기값 지정 시 타입 자동 지정 된어 숫자만 할당 가능

let anyVar2:any = 10;
anyVar2 = "10";
anyVar2 = () => {};
anyVar2.split('.'); // error - 런타임시 문자열이 아니라 오류가 발생 함

// unknown
let anyVar3: unknown = 10;
anyVar3 = "10";
anyVar3 = () => {};
// anyVar1 = anyVar3; // error - unknown 변수는 다른 값으로 참조할 수 없다.
// anyVar3.split("."); // error - unknown에 프로토타입이 없는 함수는 오류, 연산 포함