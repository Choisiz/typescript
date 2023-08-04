{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //class안에 멤버변수를 표현할때는 function,const,let,var를 쓰지 않는다.
  class CoffeeMaker {
    static BEAN_GRAM_SHOT: number = 10; //클래스 레벨
    coffeeBeans: number = 0; //인스턴스레벨

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //this를 붙이면 멤버변수를 가르킴 안붙이면 인자값
    }

    //TODO static는 함수에서도 적용, 생성자를 호출x 새로운것을 만들고싶다. =클래스를 만들지 않고서 사용가능
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      /*
      ? CoffeeMaker.BEAN_GRAM_SHOT ???
      ? 이뜻은 오브젝트마다 해당변수를 생성하지 않는다는것이다.클래스자체에존재
      ? static를 붙였으므로 this필요x, 대신 클래스이름필요
      TODO 오브젝트마다 새로 생성 데이터가 있다면 멤버변수 즉 인스턴스 레벨로 그게 아니라 클래스레벨(static) 지정
      */
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

  const make = new CoffeeMaker(30);

  /*
  ? make:이렇게 인스턴스를 생성한다면???
  ? 클래스안에 있는 멤버변수들(BEAN_GRAM_SHOT,coffeeBeans)이 다 공유가 된다. = 메모리가낭비
  ? 해결책: 앞에 static를 붙이면 됨 = 클래스레벨
  */

  //TODO static는 함수에서도 적용, 생성자를 호출x 새로운것을 만들고싶다. =클래스를 만들지 않고서 사용가능
  const make2 = CoffeeMaker.makeMachine(20);

  console.log(make);
  console.log(make2);
  console.log(CoffeeMaker.BEAN_GRAM_SHOT);
}
