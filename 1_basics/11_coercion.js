/**
 * 타입 변환
 * 1) 명시적
 * 2) 암묵적
 */
let age = 21;
console.log(typeof age, age); // number

// string으로 암묵적 타입 변환
let test = age + "";
console.log(typeof test, test); // string

// 명시적 타입 변환
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string

/**
 * 암묵적 타입변환 예시들
 * - 문자열 연결 연산자는 숫자 타입을 문자열로 변환
 * - 문자열 연결 연산자를 제외한 산술 연산자는 숫자 타입으로 변환
 * - == 연산자는 서로 다른 타입을 비교할 때 타입을 강제로 변환
 * - 원하지 않는 방식으로 타입이 변환되어 예상치 못한 결과가 나올 수 있음
 * - 자바스크립트는 명시적으로 코딩하는 것을 권장!
 */

// 숫자형문자와 숫자를 더하면 문자열이 됨
console.log("12" + 3); // 123, '12'가 문자열로 변환
console.log(typeof (12 + "3")); // string

// 숫자형문자와 숫자형문자를 더하면 숫자가 됨
console.log("12" + "3"); // 123, '12'가 문자열로 변환
console.log(typeof ("12" + "3")); // string

// 곱하면 숫자가 됨
console.log("12" * 3); // 36, '12'가 암묵적으로 숫자로 변환
console.log(typeof ("12" * 3)); // number

// 빼면 숫자가 됨
console.log("12" - 3); // 9, '12'가 암묵적으로 숫자로 변환
console.log(typeof ("12" - 3)); // number

/**
 * .toString() 메서드로 명시적으로 타입 변환
 */
let num = 10;
console.log(num.toString()); // 10
console.log(typeof num.toString()); // string

let testBool = true;
console.log(testBool.toString()); // true
console.log(typeof testBool.toString()); // string

console.log(Infinity.toString()); // Infinity
console.log(typeof Infinity.toString()); // string

/**
 * parseInt()와 parseFloat()로 명시적으로 타입 변환
 */
console.log(typeof parseInt("123"), parseInt("123")); // number 123
console.log(typeof parseFloat("123.45"), parseFloat("123.45")); // number 123.45

console.log(typeof +"1", +"1"); // number 1

/**
 * Boolean 타입으로 변환
 */
console.log(!"x"); // false
console.log(!!"x"); // true

console.log(!""); // true
console.log(!!""); // false

console.log(!0); // true
console.log(!!0); // false

console.log(!"0"); // false
console.log(!!"0"); // true

console.log(!null); // true
console.log(!!null); // false

console.log(!undefined); // true
console.log(!!undefined); // false

console.log(!{}); // false
console.log(!!{}); // true

console.log(![]); // false
console.log(!![]); // true
