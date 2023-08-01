{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEAN_GRAM: number = 2;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: milkMaker,
      private sugar: SugarMaker
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface milkMaker {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarMaker {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려우유거품기
  class CheapMilkSteamer implements milkMaker {
    private steamMilk(): void {
      console.log("싸구려우유제조중... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 고급우유거품기
  class FancyMilkSteamer implements milkMaker {
    private steamMilk(): void {
      console.log("고급우유제조중... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 차가운우유거품기
  class ColdMilkSteamer implements milkMaker {
    private steamMilk(): void {
      console.log("차가운우유거품기제조중... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕제조기
  class AutomaticSugarMixer implements SugarMaker {
    private getSugar() {
      console.log("설탕제조중...🍬");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  //설탕제조기
  class SugarMixer implements SugarMaker {
    private getSugar() {
      console.log("일반설탕제조중...🍬");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoMilk implements milkMaker {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarMaker {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //클래스간 상호작용 하는경우에는 클래스자체를 노출하긴보다는 계약서(인터페이스)로 상호작용하는것을 추천 => 디커플링원칙

  //우유   shots: number;

  const milkIng = new CheapMilkSteamer();

  const fancyMilk = new FancyMilkSteamer();
  const coldMilk = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  //설탕
  const sugarIng = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();
  //머신
  const sweetMachine = new CoffeeMachine(12, noMilk, sugarIng);
  const sweetMachine2 = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, milkIng, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilk, noSugar);
  const sweetCaffeLatteMachine = new CoffeeMachine(12, milkIng, sugarIng);
  console.log(sweetCaffeLatteMachine.makeCoffee(2));
}
