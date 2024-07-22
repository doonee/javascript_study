/**
 * Copy by value: 원시 데이터 타입
 * Copy by reference: 객체 데이터 타입
 */
let a = 1;
let b = a; // a의 값을 복사해서 b에 저장
console.log(a, b); // 1 1

a = 2; // a의 값을 변경
console.log(a, b); // 2 1 => a만 변경되고 b는 변경되지 않음
console.log(a === b); // false

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr1의 참조값을 arr2에 저장
console.log(arr1, arr2); // [1, 2, 3] [1, 2, 3]

arr1.push(4); // arr1에 4 추가
console.log(arr1, arr2); // [1, 2, 3, 4] [1, 2, 3, 4] => arr1과 arr2 모두 변경됨
console.log(arr1 === arr2); // true
