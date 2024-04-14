// 서로소 유니온 타입
type Admin = {
  tag: "Admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "Member";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  // 안 좋은 예
  //   if('kickCount' in user){
  //     console.log(user.kickCount)
  //   }else if('point' in user){
  //     console.log(user.point);
  //   }else{
  //     console.log(user.visitCount);
  //   }
  // }

  // if (user.tag === "Admin") {
  //   console.log(user.kickCount);
  // } else if (user.tag === "Member") {
  //   console.log(user.point);
  // } else {
  //   console.log(user.visitCount);
  // }
  switch (user.tag) {
    case "Admin":
      console.log(user.kickCount);
      break;
    case "Member":
      console.log(user.point);
      break;
    case "Guest":
      console.log(user.visitCount);
      break;
    default:
      break;
  }
}

// 비동기 작업 처리 예
type LoadTask = {
  state: "LOAD";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
// type AsyncTask = {
//   state: "LOAD" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };
type AsyncTask = LoadTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOAD":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log("에러" + task.error.message);
      break;
    case "SUCCESS":
      console.log("성공" + task.response.data);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOAD",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "msg..",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data..",
  },
};
