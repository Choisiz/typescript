{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEAN_GRAM: number = 10;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(23, "serialNumber: ABCD");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
