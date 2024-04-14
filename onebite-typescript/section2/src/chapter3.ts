// 객체
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'kim'
}
user1.id;
user1.name;

let car: {
  brand: string;
  readonly model: string; // 값 수정 불가
  year: number;
  isRunning: boolean;
  start: () => void;
  stop: () => void;
} = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  isRunning: false,
  start: function () {
    this.isRunning = true;
    console.log("The car is started.");
  },
  stop: function () {
    this.isRunning = false;
    console.log("The car is stopped.");
  },
};
// car.model = "new Camry"; // error