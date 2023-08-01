{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffee(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEAN_GRAM: number = 10;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //Math.abs
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffee(beans: number) {
      if (beans < 0) {
        throw new Error("빈의 크가는 0보다 커야됩니다.");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    grindBeans(shots: number) {
      console.log(`grind Bean ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEAN_GRAM) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEAN_GRAM;
    }

    preheat(): void {
      console.log(`heat....`);
    }

    extract(shots: number): CoffeeCup {
      console.log(`커피내리는중....${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffee(45);
      this.machine.clean();
    }
  }

  const make: CoffeeMachine = CoffeeMachine.makeMachine(30);
  //TODO 1.CoffeeMachine타입은 CoffeeMaker를 가지고있으므로 CoffeeMaker의 함수를 사용가능
  //TODO   + 추가로 CoffeeMachine에 정의된 함수도 사용가능
  //make.fillCoffee(30);  : CoffeeMachine에 fillCoffee있으므로 사용O
  //make.makeCoffee(2);   : CoffeeMachine에 fillCoffee있으므로 사용O

  const make2: CoffeeMaker = CoffeeMachine.makeMachine(30);
  //TODO 2.CoffeeMaker타입은 CoffeeMaker를 가지고있으므로 CoffeeMaker의 함수를 사용가능
  //TODO   그러나 CoffeeMaker에 정의된 함수만 사용가능
  // make2.fillCoffee(30); : CoffeeMaker에 fillCoffee없으므로 사용X
  // make2.makeCoffee(2); : CoffeeMaker에 makeCoffee있으므로 사용O

  const make3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(30);
  //TODO CommercialCoffeeMaker인터테이스 타입은 아래 모든 함수를 가지고 있으므로 사용가능
  //make3.fillCoffee(30);
  //make3.clean();
  //make3.makeCoffee(2);

  const amateur = new AmateurUser(make);
  amateur.makeCoffee();
  //TODO 1.생성자 타입이 CoffeeMaker인페타입이기 때문에 makeCoffee라는 함수는
  //TODO   인페에 정의된 makeCoffee만 사용가능

  const pro = new ProBarista(make);
  pro.makeCoffee();
  //TODO 2.생성자 타입이 CommercialCoffeeMaker인페타입이기 때문에 makeCoffee라는 함수는
  //TODO    인페에 정의된 makeCoffee,fillCoffee,clean만 사용가능

  //private 쓰면 함수사용x
  //인터페이스를 사용하면 인터페이스의 정의된 함수만 사용가능하다.
  //즉 모든기능을 사용하지 않고, 몇몇 기능을 사용자에 맞게 설정가능하다.
  //단, 인터페이스를 사용시 인터페이스안에 정의되어있는 함수들은 클래스에 정의가 되어있어야한다.
  //인터페이스를 사용하면 내가 얼마만큼의 행동을 할것인지 설정할수있다.
}
