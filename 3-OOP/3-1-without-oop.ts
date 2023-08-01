{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEAN_GRAM_SHOT: number = 10;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEAN_GRAM_SHOT) {
      throw Error("커피원두 재료가 부족합니다");
    }
    coffeeBeans -= shots * BEAN_GRAM_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEAN_GRAM_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
