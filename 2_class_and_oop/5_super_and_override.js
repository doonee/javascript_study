class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요! ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  /**
   * 파트: 노래, 춤, 랩, ...
   */
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  /**
   * 상속 받은 sayHello()를 재정의 할 수 있다.
   * 상속 받는 부모의 함수와 혼용해서 사용할 수 있다.
   */
  // sayHello() {
  //   return `안녕하세요! ${this.part}를 맡고있는 ${this.name}입니다.`;
  // }
  sayHello() {
    return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2021, "노래");
console.log("yuJin: ", yuJin); // yuJin:  FemaleIdolModel { name: '안유진', year: 2021, part: '노래' }

const wonYoung = new FemaleIdolModel("원영", 2021, "댄스");
console.log("wonYoung: ", wonYoung);
console.log("wonYoung.sayHello(): ", wonYoung.sayHello()); // wonYoung.sayHello():  안녕하세요! 원영입니다.
console.log("yuJin.sayHello(): ", yuJin.sayHello()); // yuJin.sayHello():  안녕하세요! 원영입니다.
