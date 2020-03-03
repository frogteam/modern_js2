// 변수 선언
let value = 177;
console.log(value);

//let value = 277;  // 동일 이름 변수 선언 불가

// 상수 선언
const a = 1;
console.log(a);
//a = 2;  // 오류 :

// 과거에 자바스크립트 배우신 분들 익숙
var k = 10; // var 는 오늘날 js 에서는 그닥 권장하지 않습니다
console.log(k);
var k = 20; // var 는 동일 이름 여러번 중복 선언 가능
console.log(k);

// var 와 let
// IE9, IE10  와 같은 구형 브라우저에서는
//  let, const 를 사용 못함.

// 개발 단계에서는 '바벨' 등을 사용하여
// 우리가 개발한 코드가 구형 브라우저 에서동 동작케 함.

//----
// 데이터 타입
let value2 = 100; // 숫자
let str1 = "hello"; // 문자열
let str2 = "안녕하세요";

// 문장 끝나고 세미콜론 ;
// 있어도 그만, 없어도 그만.
console.log(value2);
