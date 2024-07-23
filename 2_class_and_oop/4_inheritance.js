class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2021);
console.log("yujin: ", yujin); // yujin:  FemaleIdolModel { name: '안유진', year: 2021 }

const jiMin = new MaleIdolModel("박지민", 2021);
console.log("jiMin: ", jiMin); // jiMin:  MaleIdolModel { name: '박지민', year: 2021 }

console.log("yujin.dance(): ", yujin.dance()); // yujin.dance():  여자 아이돌이 춤을 춥니다.
console.log("yuJin.name", yujin.name); // yuJin.name 안유진

console.log("jiMin.sing(): ", jiMin.sing()); // jiMin.sing():  남자 아이돌이 노래를 부릅니다.
console.log("jiMin.name", jiMin.name); // jiMin.name 박지민

/**
 * yuJin은 IdolModel의 인스턴스이다. (true)
 * yuJin은 FemaleIdolModel의 인스턴스이다. (true)
 * yuJin은 MaleIdolModel의 인스턴스이다. (false)
 */
console.log("yujin instanceof IdolModel: ", yujin instanceof IdolModel); // true
console.log(
  "yujin instanceof FemaleIdolModel: ",
  yujin instanceof FemaleIdolModel
); // true
console.log("yujin instanceof MaleIdolModel: ", yujin instanceof MaleIdolModel); // false

console.log("---------------------------");

console.log("jiMin instanceof IdolModel: ", jiMin instanceof IdolModel); // true
console.log(
  "jiMin instanceof FemaleIdolModel: ",
  jiMin instanceof FemaleIdolModel
); // true
console.log("jiMin instanceof MaleIdolModel: ", jiMin instanceof MaleIdolModel); // false
