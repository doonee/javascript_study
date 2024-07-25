const testObj = {};

/**
 * __proto__ 는 모든 객체에 존재하는 프로퍼티이다.
 * __proto__ 는 객체의 부모 역할을 하는 프로퍼티이다.
 * __proto__ 는 객체를 생성할 때 사용한 생성자 함수의 prototype 프로퍼티를 가리킨다.
 */
console.log(testObj.__proto__); // {}, 아무런 값이 없어 보이는 객체이지만 뭔가 나옴.
// 아무것도 없는 객체이지만 Object.prototype가 자동으로 부모로 설정된다.
console.log(testObj.__proto__ === Object.prototype); // true

/**
 * .toString() 메서드는 Object.prototype 객체에 존재하는 메서드이다.
 */
console.log(testObj.__proto__.toString()); // [object Object]

/**
 * 같은 생성자함수에 있는 함수를 별도의 두 객체가 사용하면 같은 메모리를 참조하는지 테스트.
 */
function IdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요! ${this.name}입니다.`;
  };
}
const yuJin = new IdolModel("안유진", 2021);
const wonYoung = new IdolModel("장원영", 2021);

// showHidden: true => 감춰진 프로퍼티를 보여주는 키워드
console.log("IdolModel ==> ");
console.dir(IdolModel, { showHidden: true });

/**
 * 다른 메모리를 참조한다. => 메모리 낭비
 * hasOwnProperty() 메서드는 자체 프로퍼티인지 확인하는 메서드이다.
 */
console.log(yuJin.sayHello === wonYoung.sayHello); // false
console.log(
  `yuJin.hasOwnProperty("sayHello"): `,
  yuJin.hasOwnProperty("sayHello")
); // true

console.log(yuJin.sayHello); // 실행 됨 => [Function (anonymous)]
// console.log(yuJin2.sayHello()); // 실행 안됨!

console.log("--------------------------------");

console.log(
  "Object.prototype === Function.prototype.__proto__ === IdolModel.__proto__.__proto__"
);
// IdolModel은 Function.prototype을 상속받는다.
console.log(IdolModel.__proto__ === Function.prototype); // true
// Function.prototype은 Object.prototype을 상속받는다.
console.log(Function.prototype.__proto__ === Object.prototype); // true
// IdolModel은 최상위 객체 Object.prototype을 상속받는다.
console.log(IdolModel.__proto__.__proto__ === Object.prototype); // true

console.log("--------------------------------");

/**
 * 부모생성자인 prototype에 메서드를 추가하면 같은 메모리를 참조한다.
 */
function IdolModel2(name, year) {
  this.name = name;
  this.year = year;
}
IdolModel2.prototype.sayHello = function () {
  return `안녕하세요! ${this.name}입니다.`;
};
const yuJin2 = new IdolModel2("안유진", 2021);
const wonYoung2 = new IdolModel2("장원영", 2021);

/**
 * 같은 메모리를 참조한다.
 */
console.log(yuJin2.sayHello === wonYoung2.sayHello); // true
console.log(
  `yuJin2.hasOwnProperty("sayHello"): `,
  yuJin2.hasOwnProperty("sayHello")
); // false

// 상속 받은 sayHello()는 실행이 가능하다.
console.log(yuJin2.sayHello()); // 안녕하세요! 안유진입니다.

// static method 선언하기
IdolModel2.sayStaticHello = function () {
  return "안녕하세요. static method 입니다.";
};
console.log(IdolModel2.sayStaticHello());

console.log("--------------------------------");

/**
 * Overriding: 상속 받은 메서드를 재정의하는 것
 */
function IdolModel3(name, year) {
  this.name = name;
  this.year = year;

  // class 에서 overridng 하기
  this.sayHello = function () {
    return `[2] 안녕하세요! instance method 입니다.`;
  };
}

IdolModel3.prototype.sayHello = function () {
  return `[1] 안녕하세요! prototype method 입니다.`;
};

const yuJin3 = new IdolModel3("안유진", 2021);
console.log("yuJin3.sayHello(): ", yuJin3.sayHello()); // 안녕하세요! 안유진입니다.

/**
 * getPrototypeOf(): 객체의 프로토타입을 반환한다.
 * setPrototypeOf(): 객체의 프로토타입을 설정한다.
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel4.prototype.sayHello = function () {
  return `안녕하세요! ${this.name}입니다.`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이(가) 춤을 춥니다.`;
  };
}

const yuJin4 = new IdolModel4("안유진", 2021);
const wonYoung4 = new FemaleIdolModel("장원영", 2021);

console.log("yuJin4.__proto__", yuJin4.__proto__);
console.log(yuJin4.__proto__ === IdolModel4.prototype); // true
console.log(Object.getPrototypeOf(yuJin4) === IdolModel4.prototype); // true
console.log(yuJin4.sayHello()); // 안녕하세요! 안유진입니다.

console.log(wonYoung4.dance()); // 장원영이(가) 춤을 춥니다.
// console.log(wonYoung4.sayHello()); // error!
// IdolModel4의 부모를 상속받으면 sayHello() 메서드를 사용할 수 있다.
Object.setPrototypeOf(wonYoung4, IdolModel4.prototype);
console.log(wonYoung4.sayHello()); // 안녕하세요! 장원영입니다.

/**
 * wonYoung4는 원래 자동으로 FemaleIdolModel.prototype을 상속받는다.
 * setPrototypeOf으로 IdolModel 프로토타입으로 상속을 받게 되면
 * wonYoung4는 FemaleIdolModel.prototype을 상속받지 못하게 된다.
 */
console.log(wonYoung4.constructor === FemaleIdolModel); // false
console.log(wonYoung4.constructor === IdolModel4); // true

/**
 * 위의 예시는 wonYoung4의 프로토타입을 IdolModel4로 변경했기 때문에
 * wonYoung4는 FemaleIdolModel의 메서드를 사용할 수 없다.
 * 
 * 하지만, wonYoung4의 프로토타입을 바로 IdolModel로 변경하면
 * ex) FemaleIdolModel.prototype = IdolModel4.prototype;
 * wonYoung4는 FemaleIdolModel의 메서드도 사용할 수 있다.
 * 이렇게 하면 wonYoung4는 FemaleIdolModel의 메서드도 사용할 수 있고,
 * wonYoung4는 IdolModel4의 메서드도 사용할 수 있다.
 */