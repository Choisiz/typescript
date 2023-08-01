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
      if (beans < 0) throw new Error("빈의 크가는 0보다 커야됩니다.");
      return (this.coffeeBeans += beans);
    }
    clean() {
      console.log("cleaning the machine...🧼");
    }
    grindBeans(shots: number) {
      console.log(`grind Bean ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEAN_GRAM)
        throw new Error("Not enough coffee beans!");
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
    //자식클래스에서 또다른데이터를 생성자에서 받아올수있다면
    //자식클래스에서 생성자를 생성한다면 super을 통해 부모클래스에서 필요한 데이터를 가져온다
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      //부모클래스의 함수를 가지고 오고 싶다면
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "serialNumber: ABCD");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}

//상속사용법 자식클래스 extends 부모클래스
//상소은 자식클래스가 정의하지 않아도 부모클래스 함수를 사용가능하다
//상속에서 자식클래스에서 부모클래스에 있는 함수를 덮어 씌울수 있다.(오버라이팅)
//오버라이팅을 한 함수는 덯어씌워지기 때문에 부모클래스함수는 가려지게 되고, 정의한 자식클래스함수만 사용가능
//이 문제를 해결하고 싶다면 super을 사용한다.
//상속은 한가지 클래스만 상속가능
