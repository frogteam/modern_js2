// ES6 에는 문자열 조합을
// 편리하게 할수 있는 방법 제공

// ES6 란
// ECMASCript6  (에크마 스크립트6)
//  2015 도입   'ES2015' 라고도 함
// JavaScript 의 버젼(?)으로 이해해도 됨
// const , let <-- ES6 에 도입된 키워드
// ES5 --> ES6 로 넘어오면서 JS에 큰 변화들 발생

// 이후 아래 버젼에서는 조금씩 업그레이드 됨.

// ES7
// 2016 등장

// ES8
// 2017 등장

// ES9
// 2018 등장

// ES10
// 2019 등장

// 새로운 버젼을 굳이 다 알려 할 필요 없슴 (불가능)

// 강의, 학습 시 배우는 내용으로 충분.

//-------------------------------------------
// Template Literal 문법 (ES6 등장)

function hello(name) {
  console.log("Hello, " + name + "!");
}
hello("아이언맨");

function hello2(name) {
  // backtick (`) 문자 사용
  // ${ 변수, 값 등}
  console.log(`Hello, ${name}!`);
}
hello2("아이언맨");

function hello3(name) {
  return `Hello, ${name}!`;
  //console.log('a');  // return 다음은 수행안됨
}
console.log(hello3("아이언맨"));
