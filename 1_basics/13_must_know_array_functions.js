/**
 * ive 멤버스
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);

// push() : 배열의 끝에 요소 추가
iveMembers.push("두니");
console.log(iveMembers); // 두니 추가

// pop() : 배열의 끝 요소 제거
iveMembers.pop();
console.log(iveMembers); // 두니 제거

// shieft() : 배열의 첫 요소 제거
iveMembers.shift();
console.log(iveMembers); // 안유진 제거

// unshift() : 배열의 첫 요소 추가
// push()는 마지막 요소에 추가하는 반면, unshift()는 첫 요소에 추가
iveMembers.unshift("안유진");
console.log(iveMembers); // 안유진 추가

/**
 * splice() : 배열의 요소 추가, 제거
 * splice(start, deleteCount, item1, item2, ...)
 * - start : 배열의 변경을 시작할 인덱스
 * - deleteCount : 제거할 요소의 수
 * - item1, item2, ... : 배열에 추가할 요소
 * - 반환값 : 제거된 요소를 담은 배열
 */
// 가을 제거
iveMembers.splice(1, 1);
console.log(iveMembers); // 가을 제거

// 테스트를 위해 변수값 다시 리셋
iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

/**
 * concat() : 배열을 합쳐 새 배열 반환
 * - 기존 배열을 변경하지 않음
 * - 배열을 합쳐 새 배열을 만들어 반환
 */
let newMembers = ["두니", "미나"];
let allMembers = iveMembers.concat(newMembers);
console.log(iveMembers); // iveMembers 변경되지 않으므로 그대로 출력
console.log(allMembers); // iveMembers와 newMembers 합침

/**
 * slice() : 배열의 일부분을 반환
 * - 기존 배열을 변경하지 않음
 * - start : 추출 시작 인덱스
 * - end : 추출 종료 인덱스
 */
let slicedMembers = allMembers.slice(2, 4); // 2~4번째 요소 반환
console.log(allMembers); // allMembers 변경되지 않으므로 그대로 출력
console.log(slicedMembers); // allMembers의 1~4번째 요소 반환

/**
 * spread operator : 배열을 펼쳐서 요소로 반환
 */
let spreadMembers = [...iveMembers, ...newMembers];
console.log(spreadMembers); // iveMembers와 newMembers 합침

console.log("iveMembers: ", iveMembers);

/**
 * 배열을 복사해서 전체 배열을 참조하는 경우
 * 같은 메모리 주소를 참조하므로 같은 배열이라고 볼 수 있음
 */
let copiedMembers = iveMembers;
console.log(copiedMembers === iveMembers); // true

/**
 * 스프레드(...) 연산자를 사용해서 배열을 복사하면
 * 새로운 배열을 만들어서 메모리 주소가 다르게 할당됨
 */
let spreadCopiedMembers = [...iveMembers];
console.log("spreadCopiedMembers: ", spreadCopiedMembers); // iveMembers spread로 복사
console.log(spreadCopiedMembers === iveMembers); // false

/**
 * join() : 배열의 요소를 문자열로 변환
 * - 구분자를 인자로 전달할 수 있음
 * - 기본 구분자는 쉼표(,)
 */
let joinedMembers = iveMembers.join();
console.log("joinedMembers1: ", joinedMembers); // 안유진,가을,레이,장원영,리즈,이서
console.log("typeof joinedMembers: ", typeof joinedMembers); // string

joinedMembers = iveMembers.join(" ");
console.log("joinedMembers2: ", joinedMembers); // 안유진 가을 레이 장원영 리즈 이서
console.log("typeof joinedMembers2: ", typeof joinedMembers); // string

joinedMembers = iveMembers.join("-");
console.log("joinedMembers3: ", joinedMembers); // 안유진-가을-레이-장원영-리즈-이서
console.log("typeof joinedMembers3: ", typeof joinedMembers); // string

/**
 * 배열 정렬
 * - sort() : 오름차순 정렬
 * - reverse() : 내림차순 정렬
 */
console.log("iveMembers.sort(): ", iveMembers.sort()); // 가나다순 정렬
console.log("iveMembers.reverse(): ", iveMembers.reverse()); // 역순 정렬

/**
 * map() : 배열 요소 전체에 대해 함수 호출
 * - 배열 요소를 변형할 때 사용
 * - 새로운 배열 반환
 * - 기존 배열 변경하지 않음
 * - map() 메서드는 콜백 함수를 인자로 받음
 * - 콜백 함수는 배열의 각 요소에 대해 실행됨
 * - 콜백 함수는 세 개의 인자를 받음
 *  - currentValue : 현재 처리하고 있는 요소
 *  - index : 현재 처리하고 있는 요소의 인덱스
 *  - array : 현재 처리하고 있는 원본 배열
 *  - 반환값 : 새로운 배열
 */
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => num * num);
console.log("squaredNumbers: ", squaredNumbers); // [1, 4, 9, 16, 25]

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return "아이브 유진";
    } else {
      return x;
    }
  })
); // [ '장원영', '이서', '아이브 유진', '리즈', '레이', '가을' ]

// 원래의 iveMembers는 변경되지 않음
console.log("iveMembers: ", iveMembers);

/**
 * filter() : 배열 요소 전체에 대해 함수 호출
 * - 콜백 함수의 반환값이 true인 요소만 추출
 * - 새로운 배열 반환
 * - 기존 배열 변경하지 않음
 * - 콜백 함수는 세 개의 인자를 받음
 * - currentValue : 현재 처리하고 있는 요소
 * - index : 현재 처리하고 있는 요소의 인덱스
 * - array : 현재 처리하고 있는 원본 배열
 * - 반환값 : true 또는 false
 * - true인 요소만 추출
 */
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("evenNumbers: ", evenNumbers); // [2, 4]

/**
 * find() : 배열 요소 전체에 대해 함수 호출
 * - 콜백 함수의 반환값이 true인 첫 번째 요소 반환
 * - 콜백 함수는 세 개의 인자를 받음
 * - currentValue : 현재 처리하고 있는 요소
 * - index : 현재 처리하고 있는 요소의 인덱스
 * - array : 현재 처리하고 있는 원본 배열
 * - 반환값 : true 또는 false
 * - true인 첫 번째 요소 반환
 * - 없으면 undefined 반환
 */
let findNumber = numbers.find((num) => num > 3);
console.log("findNumber: ", findNumber); // 4
console.log('typeof findNumber: ', typeof findNumber); // number

/**
 * findIndex() : 배열 요소 전체에 대해 함수 호출
 * - 콜백 함수의 반환값이 true인 첫 번째 요소의 인덱스 반환
 * - 콜백 함수는 세 개의 인자를 받음
 * - currentValue : 현재 처리하고 있는 요소
 * - index : 현재 처리하고 있는 요소의 인덱스
 * - array : 현재 처리하고 있는 원본 배열
 * - 반환값 : true 또는 false
 * - true인 첫 번째 요소의 인덱스 반환
 * - 없으면 -1 반환
 * - find()와 비슷하지만 인덱스를 반환
 */
let findIndexNumber = numbers.findIndex((num) => num > 3);
console.log("findIndexNumber: ", findIndexNumber); // 3

/**
 * reduce() : 배열 요소 전체에 대해 함수 호출
 * - 누적값과 배열의 각 요소에 대해 함수 호출
 * - 콜백 함수는 네 개의 인자를 받음
 * - accumulator : 누적값
 * - currentValue : 현재 처리하고 있는 요소
 * - index : 현재 처리하고 있는 요소의 인덱스
 * - array : 현재 처리하고 있는 원본 배열
 * - 반환값 : 누적값
 * - 누적값을 반환
 * - 초기값을 설정할 수 있음
 * - 초기값을 설정하지 않으면 배열의 첫 번째 요소가 초기값이 됨
 * - 초기값을 설정하면 누적값이 초기값부터 시작
 */
let sum = numbers.reduce((acc, cur) => acc + cur);
console.log("sum: ", sum); // 15

let sumWithInitialValue = numbers.reduce((acc, cur) => acc + cur, 10);
console.log("sumWithInitialValue: ", sumWithInitialValue); // 25



