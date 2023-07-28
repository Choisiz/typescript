{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //부모
  //abstract면 추상클래스고 해당클라스자체로는 오브젝트생성x, 추상클래스의 인스턴스를 만들수 없다
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEAN_GRAM: number = 10;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //자식1
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  //자식2
  class SweetCoffeeMaker extends CoffeeMachine {
    private sugar(): void {
      console.log("설탕넣는중");
    }
    protected extract(shots: number): CoffeeCup {
      this.sugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machine: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machine.forEach((machine) => {
    console.log("----------------");
    machine.makeCoffee(1);
  });
}
