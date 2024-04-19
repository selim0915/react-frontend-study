interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 4. Pick<T, K>
// const legacyPost: Post = { // error - tag가 없어서 오류 발생
//     title: "",
//     content: "",
// };
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "",
    content: "",
};
// Pick<T, K> 타입 구현하기
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};

// 5. Omit<T, K>
// const noTitlePost: Post = { // error - title이 없어서
//     content: "",
//     tags: [],
//     thumbnailURL: "",
// };
const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};
// Omit<T, K> 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 6. Record<K, V>
type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
};
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
// Record<K, V> 구현하기
type Record<K extends keyof any, V> = {
    [key in K]: V;
};