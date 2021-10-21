
{
    type coffeeData = {
        shots: number
        milk:boolean
        coffeeBeans: number
        suger?: boolean
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

        
        class CaffeLatteImpl extends CoffeeMakeImpl{
            
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
        class SweetCoffeImpl extends CoffeeMakeImpl{
            makeCoffee(shots:number,coffeeBeans:number):coffeeData{
                const coffee = super.makeCoffee(shots,coffeeBeans);
                return {
                    ...coffee,
                    milk:true,
                    suger:true
                }
            }
        }

        const machines = [
            new CoffeeMakeImpl(200),
            new CaffeLatteImpl(100,'다형성'),
            new SweetCoffeImpl(300),
            new CaffeLatteImpl(100,'짱이다')
        ]
        machines.map((machine)=> {
            console.log('-------------------');
            machine.makeCoffee(1,100);
        })
        
}    
    