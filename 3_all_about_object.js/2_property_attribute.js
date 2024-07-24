/**
 * property attribute: 프로퍼티를 정의할 때 자동으로 생성되는 내부 슬롯
 * 1) 데이터 프로퍼티: 키와 값으로 실질적 값을 가지고 있는 프로퍼티
 *   - value, writable, enumerable, configurable
 * 2) 액세서 프로퍼티: 자체적으로는 값을 가지지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티
 *  - getter, setter
 */
const yuJin = {
  name: "안유진",
  year: 2021,
};

/**
 * Object.getOwnPropertyDescriptor(yuJin, '속성명'): 프로퍼티 디스크립터 객체를 반환한다.
 * - value: 프로퍼티의 값
 * - writable: 프로퍼티의 값의 변경 가능 여부. false로 설정하면 읽기 전용 프로퍼티가 된다.
 * - enumerable: 프로퍼티의 열거 가능 여부. false로 설정하면 for...in 문이나 Object.keys 메서드로 열거할 수 없다.
 * - configurable: 프로퍼티의 재정의 가능 여부. false로 설정하면 프로퍼티를 삭제하거나 프로퍼티 어트리뷰트를 재설정할 수 없다.
 *     단, writable이 true인 경우 value와 writable을 변경하는 것은 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
console.log(Object.getOwnPropertyDescriptor(yuJin, "year"));

/**
 * 한꺼번에 출력하기
 * - Object.getOwnPropertyDescriptors(): 프로퍼티 디스크립터 객체들을 반환한다.
 */
console.log("--------------------------------");
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
  name: "안유진",
  year: 2001,

  /**
   * getter: 특정 프로퍼티에 접근하려 할 때 호출되는 메서드
   * - getter는 프로퍼티를 읽을 때마다 호출된다.
   * - getter는 프로퍼티를 읽기 전용으로 만들 때 사용한다.
   */
  get age() {
    return new Date().getFullYear() - this.year;
  },
  /**
   * setter: 특정 프로퍼티에 값을 할당할 때 호출되는 메서드
   * - setter는 프로퍼티를 쓸 때마다 호출된다.
   * - setter는 프로퍼티를 쓰기 전용으로 만들 때 사용한다.
   * - setter는 반드시 하나의 매개변수를 가져야 한다.
   * - setter는 반드시 값을 반환해야 한다.
   * - setter는 값을 반환하지 않으면 undefined가 반환된다.
   */
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log("--------------------------------");
console.log("yuJin2: ", yuJin2);
/**
 * getter 실행
 * - getter는 함수가 아니기 때문에 ()를 붙이지 않는다.
 * - getter는 프로퍼티처럼 접근한다.
 * - getter는 읽기 전용으로 사용한다.
 * - getter는 프로퍼티가 호출될 때마다 실행된다.
 */
console.log("yuJin2.age: ", yuJin2.age); // 0
console.log("--------------------------------");
/**
 * setter 실행
 * - setter는 함수가 아니기 때문에 ()를 붙이지 않는다.
 * - setter는 프로퍼티처럼 접근한다.
 * - setter는 쓰기 전용으로 사용한다.
 * - setter는 값을 할당할 때마다 실행된다.
 * - setter는 값을 반환해야 한다.
 * - setter는 값을 반환하지 않으면 undefined가 반환된다.
 * - setter는 반드시 하나의 매개변수를 가져야 한다.
 */
yuJin2.age = 20;
console.log("yuJin2: ", yuJin2); // { name: '안유진', year: 2001, age: [Getter/Setter] }
console.log("yuJin2.age: ", yuJin2.age); // 20
console.log("--------------------------------");
/**
 * yuJin2의 property discriptor 확인
 */
console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));
/**
 * yuJin2에 height 프로퍼티 추가
 * - yuJin2.height = 160 방식으로 하면 property attribute가 기본(false)으로 설정된다.
 */
// yuJin2.height = 160;
console.log("yuJin2: ", yuJin2); // { name: '안유진', year: 2001, age: [Getter/Setter], height: 160 }
/**
 * property attribute 까지 설정하면서 추가하기
 */
Object.defineProperty(yuJin2, "height", {
  value: 160,
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height")); // { value: 160, writable: false, enumerable: true, configurable: true }
/**
 * property attribute 변경하기
 */
Object.defineProperty(yuJin2, "height", {
  writable: true,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height")); // { value: 160, writable: false, enumerable: true, configurable: true }
console.log("yuJin2: ", yuJin2); // { name: '안유진', year: 2001, age: [Getter/Setter] }
/**
 * Enumerable
 */
console.log("--------------------------------");
console.log("Object.keys(yuJin2): ", Object.keys(yuJin2)); // [ 'name', 'year', 'age', 'height' ]
/**
 * Enumerable
 * - false로 설정하면 지정출력은 되지만, for...in 문이나 Object.keys 메서드로 열거할 수 없다.
 */
Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});
console.log(yuJin2.name); // 안유진
console.log("Object.keys(yuJin2): ", Object.keys(yuJin2)); // [ 'year', 'age', 'height' ]
/**
 * property attribute 삭제하기
 * - name은 enumerable이 false로 설정되어 있고, height는 삭제되어서 출력되지 않는다.
 */
delete yuJin2.height;
console.log("yuJin2: ", yuJin2); // { year: 2001, age: [Getter/Setter] }
/**
 * for...in 문으로 열거하기
 */
console.log("--------------------------------");
for (const key in yuJin2) {
  console.log("key: ", key);
}

