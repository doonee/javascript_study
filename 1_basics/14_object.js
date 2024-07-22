/**
 * 아이브의 장원영 객체
 */
const jang = {
  name: "장원영",
  age: 26,
  city: "Seoul",
  company: "Starship",
  position: "Main Vocalist",
  hobby: "Watching Movies",
  speciality: "Singing",
  group: "Ive",
  debut: 2021,
};

/**
 * 객체의 모든 키값 가져오기
 * Object.keys() 메서드 사용
 * - 객체의 키값을 배열로 반환
 */
console.log("Object.keys(jang): ", Object.keys(jang));

/**
 * 객체의 모든 값 가져오기
 * Object.values() 메서드 사용
 * - 객체의 값들을 배열로 반환
 */
console.log("Object.values(jang): ", Object.values(jang));
