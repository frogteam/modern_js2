// 조건문 종류들
let a = 1;
if (a + 1 === 2) {
  console.log("찹 입니다");
  console.log("a + 1 이 2 입니다");
}

a = 5;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다"); // 안보인다
}

a = 100; // 블럭 밖의 변수 a
if (a + 1 > 100) {
  let a = 200; // 블럭 안에 선언된 변수 a
  console.log("if 안의 a 값은 " + a); // 200
}

console.log("if 밖의 a 값은 " + a); // 100

// 그런데 !!
// 위 상황을 var 키워드를 사용해본다면

var k = 100; // 블럭 밖의 변수 k  (전역변수화)
if (k + 1 > 100) {
  var k = 200; // 블럭 안에 선언된 변수 a
  // 전역변수로 취급
  console.log("if 안의 k 값은 " + k); // 200
}
console.log("if 밖의 k 값은 " + k); // 200

// ★위와 같은 문제 때문에 var 를 사용하면
// 실수할 가능성이 높다

console.log("if ~ else");

a = 10;
if (a > 15) {
  console.log("a 가 15 보다 큽니다");
} else {
  console.log("a가 15보다 크지 않습니다");
}

// if ~ else if
a = 10;
// a = 5;
if (a === 5) {
  console.log("5 입니다");
} else if (a === 10) {
  console.log("10 입니다");
} else {
  console.log("5도 아니고 10 도 아닙니다");
}
