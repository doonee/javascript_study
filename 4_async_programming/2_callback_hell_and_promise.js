/**
 * 콜백이란: 함수를 다른 함수의 인자로 전달하여, 전달받은 함수를 필요에 따라 실행하는 것
 */
// function waitAndRun(callback) {
//   setTimeout(() => {
//     console.log("끝");
//   }, 1000);
// }

// waitAndRun();

// 콜백지옥
function run() {
  console.log("시작");
  setTimeout(() => {
    console.log("1초 뒤");
    setTimeout(() => {
      console.log("2초 뒤");
      setTimeout(() => {
        console.log("3초 뒤");
      }, 1000);
    }, 1000);
  }, 1000);
}
// run();

// Promise
function waitAndRun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("끝");
    }, 2000);
  });
}

waitAndRun2().then((result) => console.log(result));

