const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log("yuJin: ", yuJin);

/**
 * extensible: 객체에 새로운 프로퍼티를 추가할 수 있는지 여부
 * - 객체는 기본적으로 확장 가능한 객체다.
 * - 객체의 확장 가능 여부를 변경할 수 있다.
 * - Object.isExtensible(): 객체의 확장 가능 여부를 반환한다.
 * - Object.preventExtensions(): 객체의 확장을 금지한다.
 * - Object.isSealed(): 객체가 밀봉된 객체인지 여부를 반환한다.
 * - Object.seal(): 객체의 확장을 금지하고, 프로퍼티를 configurable: false로 변경한다.
 * - Object.freeze(): 객체의 확장을 금지하고, 프로퍼티를 configurable: false, writable: false로 변경한다.
 */
console.log("Object.isExtensible(yuJin): ", Object.isExtensible(yuJin)); // true

// 새로운 프로퍼티 추가
yuJin.position = "main vocal";

console.log("yuJin: ", yuJin);

// 객체의 확장을 금지
Object.preventExtensions(yuJin);

console.log("Object.isExtensible(yuJin): ", Object.isExtensible(yuJin)); // false

/**
 * 새로운 프로퍼티 추가 시도
 * 프로퍼티 추가가 불가능하다.
 * 기본적으로 에러가 발생하지는 않지만, strict mode에서는 에러가 발생한다.
 */
yuJin.group = "아이브";

console.log("yuJin: ", yuJin); // 아이브가 추가되어 있지 않다.

// 삭제 시도
delete yuJin.position; // 삭제 가능

console.log("yuJin: ", yuJin); // position이 삭제되어 있다.

console.log("--------------------------------");

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

/**
 * isSealed: 객체가 밀봉된 객체인지 여부를 반환한다.
 */
console.log("Object.isSealed(yuJin2): ", Object.isSealed(yuJin2)); // false

/**
 * Seal: 객체의 확장을 금지하고, 프로퍼티를 configurable: false로 변경한다.
 * - writable 설정은 가능하다.
 */
Object.seal(yuJin2);

/**
 * configurable: false인 프로퍼티는 추가, 삭제가 불가능하다.
 * - 별도의 에러가 발생하지는 않는다.
 */
yuJin2.group = "아이브"; // 추가 불가능
delete yuJin2.year; // 삭제 불가능
console.log("yuJin2: ", yuJin2);

Object.defineProperty(yuJin2, "name", {
  value: "새유진",
});
Object.defineProperty(yuJin2, "name", {
  writable: false,
});
console.log("--------------------------------");
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
console.log("yuJin2: ", yuJin2);

console.log("--------------------------------");

const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

/**
 * Freezed: 객체의 확장을 금지하고, 프로퍼티를 configurable: false, writable: false로 변경한다.
 */
console.log("Object.isFrozen(yuJin3): ", Object.isFrozen(yuJin3)); // false

Object.freeze(yuJin3);
console.log("Object.isFrozen(yuJin3): ", Object.isFrozen(yuJin3)); // true

yuJin3.group = "아이브"; // 추가 불가능
delete yuJin3.year; // 삭제 불가능
console.log("yuJin3: ", yuJin3);

console.log("--------------------------------");
console.log("yuJin3.name의 프로퍼티 디스크립터 객체");
/**
 * configurable: false, writable: false 로 설정된 프로퍼티는 변경(재정의)이 불가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

// 변경 불가!!
// Object.defineProperty(yuJin3, "name", {
//   value: "새유진",
// });

console.log("--------------------------------");
console.log("객체 내의 객체가 있을 때");
console.log("--------------------------------");

const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
console.log("yuJin4", yuJin4);

/**
 * 상위 object를 freeze 해도, 하위 object가 freeze 되지는 않는다.
 */
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4.wonYoung)); // false
