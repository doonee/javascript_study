console.log(name); // undefined
var name = "Alice";
console.log(name); // Alice

/**
 * hosting 이란?
 * 변수 선언과 초기화가 코드의 어디에 있든 상관없이, 선언부가 최상단으로 끌어올려지는 현상
 * - var를 사용하면 hosting이 발생해서 선언부가 최상단으로 끌어올려져서 오류가 발생하지 않음
 * - let, const를 사용하면 hosting이 발생하지 않아서 선언부가 최상단으로 끌어올려지지 않아서 오류가 발생함
 */

console.log(name); // error
let name = "Alice";

console.log(name); // error
const name = "Alice";
