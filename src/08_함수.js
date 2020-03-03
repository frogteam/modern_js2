// 특정 코드를
// 하나의 명령으로 수행할수 있게 하기

// 파라미터 (입력값) 처리
// 함수 처리후 결과값 (리턴값)

// function 함수이름(파라미터)
function add(a, b) {
  return a + b;
}

let sum = add(1, 2);
console.log("sum = " + sum);

function hello(name) {
  console.log("hello, " + name);
}

hello("연철");
