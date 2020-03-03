// ES6 에 있는
// '비구조화할당 (destructuring assigment)문법'을 사용하면
// 객체변수.속성  <-- 좀더 편리하게 다룰수 있다.
// '비구조화할당 문법'
//   다른말로 '객체 구조 분해'

// 공식
// https://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// 추가 참조
// https://velog.io/@public_danuel/destructuring-assignment

// 비구조화 할당, 잘 사용하면 코드 깔끔해진다

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티브 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 그놈"
};

// 객체를 매개변수로 받기
function print(hero) {
  // ★ 객체 구조 분해
  const { alias, name, actor } = hero;
  // ↑어디에서 어떤(key)값을 추출하고 싶은지 정의

  // 이제 굳이 객체변수명을 일일히 명시 안해도 된다
  let text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 함수 parameter 에도 비구조화 할당 가능!
// 훨씬 깔끔
function print2({ alias, name, actor }) {
  let text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`;
  console.log(text);
}
print2(ironMan);
print2(captainAmerica);

// 꼭 함수 안에서만 사용할수 있는건 아니다.
const { name } = ironMan;
console.log(name + " " + typeof name + " " + typeof { name });
