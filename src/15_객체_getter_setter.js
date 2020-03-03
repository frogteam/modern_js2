/* object 의 getter, setter

getter 함수: 특정 값을 조회할때마다
setter 함수: 특정 값을 설정할때마다

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get

ES 5.1 에 최초 정의
https://www.ecma-international.org/ecma-262/5.1/#sec-11.1.5

ES 6 에서 계산된 프로퍼티 이름이 추가
https://www.ecma-international.org/ecma-262/6.0/#sec-method-definitions


JS 에서 매우 유용

*/

const numbers = {
  a: 1,
  b: 2,

  // getter 함수
  get sum() {
    // get 키워드로 시작
    console.log("sum 함수가 실행됩니다");
    // 반드시 무엇인가 리턴해주어야 한다
    return this.a + this.b;
    // return 이 빠지면 undefined 를 리턴한다
  }
};

// getter 함수는 아래와 같이 '조회' 하려 할때
// 해당 코드가 수행된다.
console.log(numbers.sum);
//console.log(numbers.sum());  // 에러!
numbers.b = 5;
console.log(numbers.sum);
console.log();

// setter 함수
const dog = {
  _name: "멍멍이",

  // setter
  set name(value) {
    // 반드시 parameter 설정되어야 한다
    console.log("이름이 바뀝니다.." + value);
    this._name = value;
  }
};

console.log(dog._name);
dog.name = "뭉뭉이"; // setter name() 이 호출!
console.log(dog._name);
console.log();
//---------------------------------------

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate(); // 업데이트!
  },
  set b(value) {
    this._b = value;
    this.calculate(); // 업데이트!
  }
};

console.log(numbers2.sum);
// setter 호출
// 될때마다 sum값이 자동 업데이트 된다
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum);
// 여러번 조회해도 이전에 이미 계산된 값을
// 조회하는 것이기 때문에 재계산을 하지 않는다!
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log();

// 아래는 좀 다르게 동작할것이다.
const numbers3 = {
  _a: 1,
  _b: 2,
  get sum() {
    console.log("sum()");
    return this._a + this._b;
  }
};
console.log(numbers3.sum); // 조회할때마다 sum을 매번 계산할것이다.
console.log(numbers3.sum);
console.log(numbers3.sum);
