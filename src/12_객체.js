// 객체 object
// 하나의 이름에 여러종류의 값을 담을수 있다

const dogName = "멍멍이";
const dogAge = 2;
console.log(dogName);
console.log(dogAge);

// key : value
//   key 는 일반적으로 문자열로 설정 (공백 불가)
const dog = {
  name: "뭉뭉이",
  age: 2,
  isCute: true,
  sample: {
    a: 1,
    b: 2
  },
  "key with space": "asdf" // 이러한 key 가능!
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

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

console.log(ironMan);
console.log(captainAmerica);

// 객체를 매개변수로 받기
function print(hero) {
  let text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
    hero.actor
  } 입니다`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
