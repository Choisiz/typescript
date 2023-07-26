{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEAN_GRAM_SHOT: number = 10; //class level
    coffeeBeans: number = 0; //instanse level
    //항상호출
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //Math.abs
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEAN_GRAM_SHOT) {
        throw Error("커피원두 재료가 부족합니다");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEAN_GRAM_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const make = new CoffeeMaker(30);
  const make2 = CoffeeMaker.makeMachine(20);
  console.log(make);
  console.log(make2);
}

//class안에 있는 멤버변수에 접근하기 위해서는 this.변수를 붙여야된다. 작성화지 않으면 함수안에 인자를 가르킨다
//class안에 멤버변수를 표현할때는 const,let,var를 쓰지 않는다.
