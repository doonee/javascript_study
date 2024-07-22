let sample = "99";

console.log(sample + 1); // 991
console.log(sample - 1); // 98
console.log(sample * 1); // 99
console.log(sample / 1); // 99
console.log(sample % 1); // 0

console.log(+sample); // 99
console.log(-sample); // -99
console.log(typeof sample); // string
/**
 * number
 * string에 +를 붙이면 number로 변환 가능
 * 숫자가 아닐 경우 NaN(Not a Number) 반환
 */
console.log(typeof +sample);

console.log(0 == ""); // true
console.log(true == 1); // true
console.log(true == "1"); // true
console.log(false == 0); // true

/**
 * null 연산자
 * - null 또는 undefined일 경우 대체값을 반환
 */
let name;
console.log(name); // undefined

name = name ?? "두니"; // null 또는 undefined일 경우 '두니' 반환
console.log(name); // 두니

name = name ?? "새 두니"; // null 또는 undefined일 경우 '새 두니' 반환
console.log(name); // 두니

let name2;
name2 ??= "두니"; // null 또는 undefined일 경우 '두니' 반환
console.log(name2); // 두니
