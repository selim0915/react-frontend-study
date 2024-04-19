// 7. Exclude
type A = Exclude<string | boolean, string>; // // boolean
// Exclude<K, V> 구현하기
type Exlcude<T, U> = T extends U ? never : T;

// 8. Exreact
type B = Extract<string | boolean, boolean>; // boolean
// Exreact<K, V> 구현하기
type Extract<T, U> = T extends U ? T : never;

// 9. ReturnType
function funcA() {
    return "hello";
}
function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
// ReturnType<K, V> 구현하기
type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
) => infer R
    ? R
    : never;