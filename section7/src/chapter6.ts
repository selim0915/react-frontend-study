// Promise
// 1. 기본 타입
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 결과값 : 20
    resolve(20);
  }, 3000);
});
promise.then((response) => {
  // response는 number 타입
  console.log(response);
});
promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

// 2. 객체 변수
interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
}
const PostRequest = fetchPost();

PostRequest.then((response) => {
  console.log(response.id);
});
promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});