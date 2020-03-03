// 비교연산자
// ==, !=
// ===, !==   xkdlqRk
let a = 1;
let b = 1;
let eq = a == b;
console.log(eq);

a = 1;
b = "1";
eq = a == b;
console.log(eq);

eq = a === b; // false
console.log(eq);

a = false;
b = 0;
eq = a == b; // true 판정
console.log(eq);

a = true;
b = 1;
eq = a == b; // true 판정
console.log(eq);

// ※ 웬만하면 == 보단 === 을 사용하길 바람
// (우측에 warning 이 뜬다)

a = null;
b = undefined;
eq = a == b; // true
console.log(eq);

a = "a";
b = "b";
eq = a !== b; // true
console.log(eq);

a = 1;
b = "1";
eq = a != b; // false
console.log(eq);

a = 1;
b = "1";
eq = a !== b; // true
console.log(eq);

// 대소 비교
a = 10;
b = 15;
let c = 15;
console.log(a < b);
console.log(a > b); // false
console.log(b >= a); // true
console.log(a >= a); // true
console.log(a > a); // false
console.log(b < c);

// 문자열 비교
a = "안녕";
b = "하세요";

console.log(a + b);
