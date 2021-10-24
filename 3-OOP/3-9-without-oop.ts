{
  type coffeeData = {
    shots: number;
    milk: boolean;
    coffeeBeans: number;
    suger?: boolean;
  };
  interface CoffeeMake {
    makeCoffee(shots: number, coffeeBeans: number): coffeeData;
  }

  interface MilkProvider {
    makeMilk(cup: coffeeData): coffeeData;
  }
  interface SugarProvider {
    makeSuger(cup: coffeeData): coffeeData;
  }
  //커피만들기
  class CoffeeMakeImpl implements CoffeeMake {
    private static BEAN_GRAM_COFFEE: number = 5;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkProvider,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBean(beans: number) {
      if (beans < 0) throw new Error("beans가 0보다 커야합니다");
      return (this.coffeeBeans += beans);
    }
    clean() {
      console.log("청소중입니다");
    }
    private grindBeans(shots: number) {
      console.log(
        "-------------------------------------------------------------------------"
      );
      console.log(`${shots}샷의 커피를 갈고있습니다.`);
      if (this.coffeeBeans < shots * CoffeeMakeImpl.BEAN_GRAM_COFFEE)
        throw new Error("커피재료가 부족합니다.");
      this.coffeeBeans -= shots * CoffeeMakeImpl.BEAN_GRAM_COFFEE;
      console.log(
        `--사용한 원두: ${shots * CoffeeMakeImpl.BEAN_GRAM_COFFEE} 남은 원두: ${
          this.coffeeBeans
        }--`
      );
    }
    preheat(): void {
      console.log("커피 데우는중...🥤🥤🥤🥤");
    }
    extract(shots: number, coffeeBeans: number): coffeeData {
      console.log(`${shots}샷의 커피 내리는중...`);
      return { shots: shots, milk: false, coffeeBeans: this.coffeeBeans };
    }
    makeCoffee(shots: number, coffeeBeans: number): coffeeData {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots, coffeeBeans);
      const sugarAdd = this.sugar.makeSuger(coffee);
      return this.milk.makeMilk(sugarAdd);
    }
  }
  //우유 제조기(싸구려)
  class CheapMilkStreamer implements MilkProvider {
    private steamMil(): void {
      console.log("밀크 가열중...🥛🥛");
    }
    makeMilk(cup: coffeeData): coffeeData {
      this.steamMil();
      return {
        ...cup,
        milk: true,
      };
    }
  }
  //우유 제조기(고급)
  class FancyMilkStreamer implements MilkProvider {
    private steamMil(): void {
      console.log("고급밀크 가열중...🥛🥛");
    }
    makeMilk(cup: coffeeData): coffeeData {
      this.steamMil();
      return {
        ...cup,
        milk: true,
      };
    }
  }
  //우유 제조기(아이스)
  class ColdMilkStreamer implements MilkProvider {
    private steamMil(): void {
      console.log("차가운밀크 가열중...🥛🥛");
    }
    makeMilk(cup: coffeeData): coffeeData {
      this.steamMil();
      return {
        ...cup,
        milk: true,
      };
    }
  }
  //우유x
  class NoMike implements MilkProvider {
    makeMilk(cup: coffeeData): coffeeData {
      return cup;
    }
  }
  //설탕 제조기(싸구려)
  class CandySugerMixer implements SugarProvider {
    private getSuger() {
      console.log("설탕 넣기🍬🍬");
      return true;
    }
    makeSuger(cup: coffeeData): coffeeData {
      const suger = this.getSuger();
      return {
        ...cup,
        suger: suger,
      };
    }
  }
  //설탕 제조기(고급)
  class FancySugerMixer implements SugarProvider {
    private getSuger() {
      console.log("고급설탕 넣기🍬🍬");
      return true;
    }
    makeSuger(cup: coffeeData): coffeeData {
      const suger = this.getSuger();
      return {
        ...cup,
        suger: suger,
      };
    }
  }
  //설탕x
  class NoSugar implements SugarProvider {
    makeSuger(cup: coffeeData): coffeeData {
      return cup;
    }
  }
  //-----------------------------------------------

  //milk
  const cheapMilkMaker = new CheapMilkStreamer();
  const fnacyMilkMake = new FancyMilkStreamer();
  const coldMilkStreamer = new ColdMilkStreamer();
  const noMike = new NoMike();
  ///sugar
  const candySugar = new CandySugerMixer();
  const fancySugar = new FancySugerMixer();
  const noSugar = new NoSugar();

  //달달한 커피만들기(커피만들기 + 설탕 제조기)
  const sweetMachine = new CoffeeMakeImpl(1, noMike, candySugar);
  //달달한 라떼만들기(커피만들기 + 우유제조기 + 설탕제조기)
  const sweet2Machine = new CoffeeMakeImpl(1, fnacyMilkMake, fancySugar);
}
