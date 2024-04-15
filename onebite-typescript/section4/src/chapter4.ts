// 함수 오버로딩

// 오버로딩 시그니처 작성
function func(a: number): void; // 타입스크립트 오버로딩 문법 : {} 사용 안함
function func(a: number, b: number, c: number): void;

// 실제 구현
function func(a: number, b?: number, c?: number) { // 최소한의 오버로딩 매개변수를 위해 작성
  if(typeof b === "number" && typeof c === "number"){
    console.log(a+b+c);
  }else{
    console.log(a);
  }
}

// 호출
// func(); // error - 해당 함수 없음
func(1);
// func(1, 2); // error - 해당 함수 없음
func(1, 2, 3);
