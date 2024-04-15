// 인터페이스 확장
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: number; // error - 타입 재정의는 불가
  isBark: boolean; // 별칭 확장
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat { // 다중 확장
}