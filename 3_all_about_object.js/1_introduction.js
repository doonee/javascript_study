/**
 * 생성자 함수: 객체를 생성하는 함수
 * - 생성자 함수를 통해 객체를 생성할 때는 new 연산자를 사용한다.
 * - 생성자 함수를 통해 객체를 생성하면 객체는 자신을 생성한 생성자 함수를 가리키는 constructor 프로퍼티를 갖는다.
 * - 생성자 함수를 통해 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩된 객체를 가리킨다.
 * - 생성자 함수의 prototype 프로퍼티에 바인딩된 객체의 constructor 프로퍼티는 생성자 함수를 가리킨다.
 * - 생성자 함수의 prototype 프로퍼티에 바인딩된 객체는 생성자 함수로 생성된 객체들의 부모 역할을 하는 프로토타입 객체다.
 * - 생성자 함수로 생성된 객체는 프로토타입 객체인 생성자 함수의 prototype 프로퍼티에 바인딩된 객체의 프로퍼티/메서드를 상속받아 사용할 수 있다.
 * - 생성자 함수로 생성된 객체는 생성자 함수의 인스턴스이다.
 * - 생성자 함수로 생성된 객체는 생성자 함수의 인스턴스인지 확인하기 위해 instanceof 연산자를 사용할 수 있다.
 * - 오래 된 소스에서 많이 사용되던 방식이지만, ES6에서 클래스가 도입되면서 생성자 함수를 사용하는 경우가 줄어들었다.
 */
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

// 클래스처럼 new 키워드를 사용하여 객체를 생성할 수 있다.
const yuJin = new IdolFunction("안유진", 2021);
console.log("yuJin: ", yuJin); // yuJin:  IdolFunction { name: '안유진', year: 2021 }
