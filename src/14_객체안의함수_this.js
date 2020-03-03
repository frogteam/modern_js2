const dog = {
  name: "멍멍이",
  sound: "멍멍!",

  // 객체 안의 함수 정의하는 다양한 방법

  // 방법1
  say1: function aaa() {
    console.log(this.sound); // this 는 함수가 위치한 객체(자기 자신)
  },

  // 방법2 : 함수의 이름은 say2 다
  say2: function() {
    console.log(this.sound); // this 는 함수가 위치한 객체(자기 자신)
  },

  // 방법3
  say3() {
    console.log(this.sound); // this 는 함수가 위치한 객체(자기 자신)
  },

  // 단 이를 화살표 함수로 만들면 this 가 문제된다.
  say4: () => {
    console.log("hello");
    //console.log(this.sound); // 에러
    //console.log(this);  // undefined
  }
  // 이유
  // function 키워드로 만든 함수에서의 this는
  // 자기가 속해있는, 객체를 가리키는데..
  // 화살표 함수의 경우
  // this를 자기가 속해 있는 곳으로
  // 연결하지 않습니다.
  // 화살표 함수는 this 가 뭔지 모릅니다!
};

dog.say1();
//dog.aaa();  // 이런 함수 없다.
dog.say2();
dog.say3();
dog.say4();

const cat = {
  name: "야옹이",
  sound: "야용~"
};

cat.say1 = dog.say1; // '연결' 발생된다!

// 다음 결과 비교해보자 (예상해보자)
dog.say1(); // 이때 this 는 dog 가 된다.
cat.say1(); // 이때 this 는 cat 이 된다.

// 다음은 어케 될까?
const catSay = cat.say1; // 아무것도 '연결' 되지 않는다.
catSay(); // this가 undefined 이니 .. 에러 발생
