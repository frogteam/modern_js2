/*
  논리 연산자
*/

let value = true;
value = false;

// !  : not 연산자
// && : and 연산자
// || : or 연산자

let a = true;
console.log("a = " + a);
a = !true;
console.log("a = " + a);

// &&
a = true && 3 < 1;
console.log("a = " + a);

a = true || false;
console.log("a = " + a);

// 논리연산자 우선순위
// not > and > or

// 연산수행 순서와 결과는 어떻게 될까?
value = !((true && false) || (true && false) || !false);
console.log("value = " + value);
