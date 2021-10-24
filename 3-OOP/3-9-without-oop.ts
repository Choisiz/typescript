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
  //커피만들기
  class CoffeeMakeImpl implements CoffeeMake {
    private static BEAN_GRAM_COFFEE: number = 5;
    private coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMakeImpl {
      return new CoffeeMakeImpl(coffeeBeans);
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
      return this.extract(shots, coffeeBeans);
    }
  }
  //우유 제조기(싸구려)
  class CheapMilkStreamer {
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
  //설탕 제조기(싸구려)
  class AuthmaticSugerMixer {
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
  //라떼만들기(커피만들기 + 우유제조기)
  class CaffeLatteImpl extends CoffeeMakeImpl {
    constructor(
      coffeeBeans: number,
      public readonly serial: string,
      private milk: CheapMilkStreamer
    ) {
      super(coffeeBeans);
    }
    // class 설탕제조기를 생성했으므로 필요x
    // private steamMil():void {
    //     console.log('밀크 가열중...')
    // }
    makeCoffee(shots: number, coffeeBeans: number): coffeeData {
      const coffee = super.makeCoffee(shots, coffeeBeans);
      console.log("코콬코코코코", coffee);
      return this.milk.makeMilk(coffee);
      //   this.steamMil();
      //   return {
      //     ...coffee,
      //     milk: true,
      //   };
    }
  }
  //달달한커피만들기(커피만들기 + 설탕제조기)
  class SweetCoffeImpl extends CoffeeMakeImpl {
    //class 설탕제조기를 생성했으므로 필요x
    // getSuger(){
    //     console.log("설탕 넣기");
    // }
    constructor(coffeeBeans: number, private sugar: AuthmaticSugerMixer) {
      super(coffeeBeans);
    }
    makeCoffee(shots: number, coffeeBeans: number): coffeeData {
      const coffee = super.makeCoffee(shots, coffeeBeans);
      return this.sugar.makeSuger(coffee);
      //   return {
      //     ...coffee,
      //     milk: true,
      //     suger: true,
      //   };
    }
  }
  //달달한라떼만들기(커피만들기 + 유유제조기 + 설탕제조기)
  class SweetCaffeeLatteImpl extends CoffeeMakeImpl {
    constructor(
      coffeeBeans: number,
      private milk: CheapMilkStreamer,
      private sugar: AuthmaticSugerMixer
    ) {
      super(coffeeBeans);
    }
    makeCoffee(shot: number, coffeeBeans: number): coffeeData {
      const coffee = super.makeCoffee(shot, coffeeBeans);
      const sugarAdd = this.sugar.makeSuger(coffee);
      return this.milk.makeMilk(sugarAdd);
    }
  }
}
