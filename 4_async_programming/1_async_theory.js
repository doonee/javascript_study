// function longWork(){
//   /**
//    * milliseconds since epoch: 1970년도 1월 1일 0시 0분 0초부터 현재까지의 시간을 밀리초로 반환
//    */
//   const milliseconds = Date.now();
//   const afterTowSeconds = milliseconds + 2000;

//   while (Date.now() < afterTowSeconds) {}

//   console.log("longWork() done");
// }

// console.log("start");
// longWork();
// console.log("end");

function longWork(){
  setTimeout(() => {
    console.log("longWork() done");
  }, 2000);
}

console.log("start");
longWork();
console.log("end");