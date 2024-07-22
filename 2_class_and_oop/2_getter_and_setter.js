class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * getter 메서드: 새로운 속성을 추가하거나 기존 속성을 수정해서 반환,
   * private 속성을 사용할 때 유용
   */
  get nameAndYear() {
    return `${this.name}은(는) ${this.year}년에 데뷔했습니다.`;
  }

  /**
   * setter 메서드: 새로운 속성을 추가하거나 기존 속성을 수정
   * private 속성을 사용할 때 유용
   * setter가 없더래도 비슷한 바인딩을 할 수 있지만,
   * setter를 사용하면 더 직관적이고 가독성이 좋아지고, 
   *   외부 액세스가 허용되지 않은 private 속성을 사용할 수 있음
   * 실무에서 잘 사용하지 않음
   */
  set setName(name) {
    this.name = name;
  }
}

const yujin = new IdolModel("안유진", 2021);
console.log("yujin: ", yujin); // yujin:  IdolModel { name: '안유진', year: 2021 }
console.log("yujin.getNameAndYear: ", yujin.nameAndYear); // yujin.getNameAndYear:  안유진은(는) 2021년에 데뷔했습니다.

yujin.setName = "원영";
console.log("yujin: ", yujin); // yujin:  IdolModel { name: '원영', year: 2021 }

/**
 * 클래스 내의 #name 속성을 private으로 선언
 */
class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name(){
    return this.#name;
  }
}

const yujin2 = new IdolModel2("안유진", 2021);
// #name 속성은 private이기 때문에 접근 불가
console.log("yujin2: ", yujin2); // yujin2:  IdolModel2 { year: 2021 }
// getter 함수로 접근 가능
console.log("yujin2.name: ", yujin2.name); // yujin2.name:  undefined