// 인덱스드 엑세스 타입
// 1. 객체 추출
interface Post {
title: string;
content: string;
author: {
  id: number;
  name: string;
  // age: number; // 추가 시 post 변수, printAuthorInfo 함수 수정 필요
};
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    // age: 50
  },
};

// function printAuthorInfo(author: { id: number; name: string }) {
//   console.log(`${author.id} - ${author.name}`);
// }
function printAuthorInfo(author: Post["author"]) { // {id : number, name: string, age:number}
  console.log(`${author.id} - ${author.name}`);
}

// 2. 배열 추출
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[number] = { // 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 된다 [0] 리터럴 변수도 가능
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 50
  },
};

// 3. 튜플 타입
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup3 = Tup[number] // number | string | boolean // number 타입을 넣으면 마치 튜플을 배열 처럼 인식해 배열 요소의 타입을 추출