
{
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
            constructor(coffeeBeans: number){
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

        //디른 클래스를 상속시 extends
        class CaffeLatteImpl extends CoffeeMakeImpl{
            //만약 생성자를 정의 한다면 반드시 super을 가져와서 인자를 넣어줘야한다.
            constructor(coffeeBeans:number, public readonly serial:string){
                super(coffeeBeans);
            }
            private steamMil():void {
                console.log('밀크 가열중...')
            }
            makeCoffee(shots:number,coffeeBeans:number):coffeeData{
                const coffee = super.makeCoffee(shots,coffeeBeans);
                this.steamMil();
                return {
                    ...coffee,
                    milk:true,
                }
            }   
        }
        const machine = new CoffeeMakeImpl(200);
        const latteMach = new CaffeLatteImpl(200,'5G');
        const latte =latteMach.makeCoffee(1,200);
        console.log(latte);
        console.log(latteMach.serial);
        
}    
    