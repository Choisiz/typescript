{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEAN_GRAM_SHOT: number = 10; //class level
    private coffeeBeans: number = 0; //instanse level
    //항상호출
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //Math.abs
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffee(beans: number) {
      if (beans < 0) {
        throw new Error("빈의 크가는 0보다 커야됩니다.");
      }
      this.coffeeBeans += beans;
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

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private defaultAge = 5;
    get age(): number {
      return this.defaultAge;
    }
    set age(num: number) {
      this.defaultAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  //const make = new CoffeeMaker(30);
  const make2 = CoffeeMaker.makeMachine(30);
  make2.fillCoffee(32);

  const user = new User("denny", "lon");
  //user.firstName = "yy";
  console.log(user.fullName);
  user.age = 20;
  console.log(user.age);
}

//const make = new CoffeeMaker(30); 같은 생성자를 이용해서 만드는것을 금지
//하고 싶다면? constructor를 private로
//get,set은 함수지만 멤버변수처럼 사용가능
