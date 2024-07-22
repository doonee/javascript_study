class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

/**
 * new 키워드 없이 클래스의 메서드 호출
 * - static 키워드를 사용하면 클래스의 메서드를 new 키워드 없이 호출 가능
 */
const yujin = IdolModel.fromObject({
  name: "안유진2",
  year: 2022,
});
console.log("yujin: ", yujin); // yujin:  IdolModel { name: '안유진2', year: 2022 }

// new 키워드 없이 인스턴스 생성
const yujin2 = IdolModel.fromList(["안유진3", 2023]);
console.log("yujin2: ", yujin2); // yujin2:  IdolModel { name: '안유진3', year: 2023 }
