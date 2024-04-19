interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 1. Partial<T>
// const draft: Post = { // error -  tags 프로퍼티가 없음
//   title: "제목은 나중에 짓자...",
//   content: "초안...",
// };

const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
};

// Partial<T> 직접 구현
type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 2. Required<T>
// const withThumbnailPost: Post = { // 오류는 나지 않지만 모든 프로퍼티를 필수로 하고 싶은 경우
//     title: "한입 타스 후기",
//     tags: ["ts"],
//     content: "",
//     thumbnailURL: "https://...",
// };
const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};

// Required<T> 직접 구현
type Required<T> = {
    [key in keyof T]-?: T[key];
};


// 3. Readonly<T> 
const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
};
// readonlyPost.content = '해킹당함'; // error - 수정 방지 프로퍼티

// Readonly<T>  직접 구현
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};