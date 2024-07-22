/**
 * 별(*)을 이용해서 6x6 정사각형 만들기
 */
for (let i = 0; i < 6; i++) {
  let star = "";
  for (let j = 0; j < 6; j++) {
    star += "*";
  }
  console.log(star);
}

/**
 * 객체에서 key와 value 출력하기
 */
console.log("===== 객체에서 key와 value 출력하기 =====");
let obj = {
  name: "두니",
  age: 21,
  city: "Seoul",
};

for (let key in obj) {
  console.log(key, ": ", obj[key]);
}

/**
 * 여자아이들 멤버들을 배열로 만들어서 출력하기
 */
console.log("===== 여자아이들 멤버들 =====");

let idle = ["수진", "미연", "소연", "우기", "슈화", "민니"];

for (let key in idle) {
  console.log(key, ": ", idle[key]);
}
// for-in 으로 index 키워드 활용하기
console.log("----- index 키워드 활용하기 -----");
for (let index in idle) {
  console.log(`${index} : ${idle[index]}`);
}

// for-of로 값 가져오기
console.log("----- for-of로 값 가져오기 -----");
for (let member of idle) {
  console.log(member);
}

/**
 * while-loop 활용해서 여자아이들 멤버들 출력하기
 */
console.log("===== while-loop 활용하기 =====");
let i = 0;
while (i < idle.length) {
  console.log(idle[i]);
  i++;
}

/** 
 * for문 내에서의 break는 for문을 종료.
 */
console.log("===== for문 내에서의 break =====");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // i가 5일 경우 for문 종료
  }
  console.log(i);
}

/**
 * for문 내에서의 continue는 for문을 종료하지 않고 다음 반복으로 넘어감.
 * continue 이후의 코드는 실행되지 않음.
 * continue는 while문에서도 사용 가능.
 */
console.log("===== for문 내에서의 continue =====");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 짝수일 경우 continue 이후의 코드는 실행되지 않음.
  }
  console.log(i);
}
