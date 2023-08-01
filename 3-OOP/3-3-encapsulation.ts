{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    //TODO: CoffeeMaker클래스의 변수인 BEAN_GRAM_SHOT앞에 private를 설정하면 사용못함
    private static BEAN_GRAM_SHOT: number = 10;
    private coffeeBeans: number = 0;
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //TODO: static를 붙여서 오브젝트를 만들수 있는 함수를 제공한다면(static makeMachine)
    //TODO: 생성자를 이용해서 생성하는것을 금지하기 때문에 생성자에 private를 설정하자.
    //TODO: ex) const make = new CoffeeMaker(30): x
    ///TODO:    CoffeeMaker.makeMachine(30):O
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    //TODO 외부에서 직접 변수(BEAN_GRAM_SHOT,coffeeBeans) 건들지 않는다면?
    //TODO 함수를 통해 접근해 변경하기
    fillCoffee(beans: number) {
      if (beans < 0) throw new Error("빈의 크가는 0보다 커야됩니다.");
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

  //const make = new CoffeeMaker(30);
  const make2 = CoffeeMaker.makeMachine(30);

  /*
  ! private:
    외부에서 접근불가
    ex) CoffeeMaker.BEAN_GRAM_SHOT
        CoffeeMaker클래스의 변수인 BEAN_GRAM_SHOT앞에 private를 설정하면 사용못함
  ! protected:
     외부에서 접근은 불가능하고 상속받은 자식클래스만 가능
  */

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private defaultAge = 5;
    get age(): number {
      return this.defaultAge;
    }
    set age(num: number) {
      if (num < 0) {
      }
      this.defaultAge = num;
    }

    //생성자에 접근제어자(private)로 쓰면 바로 멤버변수로 사용가능
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("denny", "lon");
  console.log(user.fullName);
  user.age = 20;
  console.log(user.age);
}

//get,set은 함수지만 멤버변수처럼 사용가능
