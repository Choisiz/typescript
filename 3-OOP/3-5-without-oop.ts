
{
    //커피정보
    type coffeeData = {
        shots: number
        milk:boolean
        coffeeBeans:number
    }
interface CoffeeMake {
    makeCoffee(shots:number,coffeeBeans:number):coffeeData;
}  
    class CoffeeMakeImpl implements CoffeeMake{ 
        private static BEAN_GRAM_COFFEE:number = 5; 
        private coffeeBeans:number =0;
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans:number):CoffeeMakeImpl{
            return new CoffeeMakeImpl(coffeeBeans);
        }

        fillCoffeeBean(beans:number){
            if(beans <0 ) throw new Error("beans가 0보다 커야합니다");
            return this.coffeeBeans+=beans;
        }
        private grindBeans(shots:number){
            console.log(`${shots}샷의 커피를 갈고있습니다.`);
            if(this.coffeeBeans < shots* CoffeeMakeImpl.BEAN_GRAM_COFFEE) throw new Error("커피재료가 부족합니다.");
            this.coffeeBeans -= shots* CoffeeMakeImpl.BEAN_GRAM_COFFEE;
            console.log(`--사용한 원두: ${shots* CoffeeMakeImpl.BEAN_GRAM_COFFEE} 남은 원두: ${this.coffeeBeans}--`);
        }
        preheat():void{
            console.log("커피 데우는중...🥤🥤🥤🥤")
        }
        extract(shots:number, coffeeBeans:number):coffeeData{
            console.log(`${shots}샷의 커피 내리는중...`);
            return {shots: shots,milk: false,coffeeBeans: this.coffeeBeans}
        }
        makeCoffee(shots:number,coffeeBeans:number):coffeeData{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots,coffeeBeans);
        }
    }
    const result = CoffeeMakeImpl.makeMachine(50);
    const fill = result.fillCoffeeBean(50);
    const make=result.makeCoffee(2,fill);
    console.log(make);

        // CoffeeMake라는 프랜차이즈 정보를 받아,
        // CoffeeMakeImpl라는 카페만들기를 타입으로 받아
        // 거기서 makeMachine(커피기계)을 사용하는것이다.
        // 그 커피기계에는 카페만들기 데이터가 들어있어서
        // public면 다양한 기능들을 사용가능하다.
        // 이렇게 하는 이유는
        // 추후 makeMachine(커피기계)를 다시 사용하더라도
        // 카페만들기 데이터를 어떤건쓰고,안쓰고,추가하고 이러면
        // 베이스는 같지만 기능이 다른 커피기계가 탄생하게되는데
        // 이렇게 하면, 커피만들기 즉 CoffeeMakeImpl class에 다양한
        // 기능(메소드)를 추가하면 매번 커피기계를 새로 만들필요없아
        // 커스팅마이징하여 A,B,C..커피기계를 생성해낼수가 있다.

}
