
{
type coffeeData = {
    shots: number
    milk:boolean
    coffeeBeans:number
}
interface CoffeeMake {
    makeCoffee(shots:number,coffeeBeans:number):coffeeData;
}
interface starbucks {
    makeCoffee(shots:number, coffeeBeans:number):coffeeData;
    fillCoffeeBean(beans:number):number;
    clean():void;
}
    class CoffeeMakeImpl implements CoffeeMake,starbucks{ 
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
        clean(){
            console.log('청소중입니다');
        }
        private grindBeans(shots:number){
            console.log('-------------------------------------------------------------------------');
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
    // //CoffeeMakeImpl타입 public만 접근가능
    // const result:CoffeeMakeImpl = CoffeeMakeImpl.makeMachine(50);
    // const fill = result.fillCoffeeBean(50);
    // const make=result.makeCoffee(2,fill);
    // console.log(make);

    // const result2:starbucks = CoffeeMakeImpl.makeMachine(50);
    // const fill2=result2.fillCoffeeBean(50);
    // result2.makeCoffee(1,fill2)
    // result2.clean();

    class User {
        constructor(private machine: CoffeeMake){
        };
        makeCoffee(){
            const fill =this.machine.makeCoffee(2,0);
        }
    };
    const result:CoffeeMakeImpl = CoffeeMakeImpl.makeMachine(50);
    const user = new User(result);
    user.makeCoffee();

    class Pro{
        constructor(private machine: starbucks){};
        makeCoffee(){
            const fill2=this.machine.fillCoffeeBean(50);
            const coffee = this.machine.makeCoffee(2,fill2);
            console.log('프로: ',coffee);
            this.machine.clean();
        }
    };

    //CoffeeMakeImpl타입 public만 접근가능
    const result2:CoffeeMakeImpl = CoffeeMakeImpl.makeMachine(50);
    //일반인에게 커피머신 주기
    const pro = new Pro(result2); //포로에게 커피머신 주기
    pro.makeCoffee();
}    
