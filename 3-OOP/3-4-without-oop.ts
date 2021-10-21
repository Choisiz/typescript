
{
    //커피정보
    type coffeeData = {
        shots: number
        milk:boolean,
        coffeeBeans: number
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
      
        static makeMachine(coffeeBeans:number):coffeeData{
            const abc= new CoffeeMakeImpl(coffeeBeans);
            const good =abc.makeCoffee(1,coffeeBeans);
            return good
        }

        fillCoffeeBean(beans:number){
            if(beans <0 ){
                throw new Error("beans가 0보다 커야합니다");
            }
            return this.coffeeBeans+=beans;
        }

        //글라인드
        private grindBeans(shots:number,coffeeBeans:number){
            console.log(`${shots}샷의 커피를 갈고있습니다.`);
            if(coffeeBeans < shots* CoffeeMakeImpl.BEAN_GRAM_COFFEE){
                throw new Error("커피재료가 부족합니다.");
            }
            this.coffeeBeans -= shots* CoffeeMakeImpl.BEAN_GRAM_COFFEE;
        }
        preheat():void{
            console.log("커피 데우는중...")
        }
        extract(shots:number):coffeeData{
            console.log(`${shots}샷의 커피 내리는중...`);
            return {
                shots: shots,
                milk: false,
                coffeeBeans:this.coffeeBeans
            }
        }
    
        makeCoffee(shots:number,coffeeBeans:number):coffeeData{
            this.grindBeans(shots,coffeeBeans);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    const result = CoffeeMakeImpl.makeMachine(100);
    console.log(result);
    

    // const result = CoffeeMakeImpl.makeMachine(100);
    // console.log("default 커피머신으로 커피만들기: ",result)
    // const result2=CoffeeMakeImpl.makeMachine(50);
    // console.log("B사 커피머신 초기화: ",result2)
    // const result3:CoffeeMakeImpl = new CoffeeMakeImpl(100);
    
    // const result4= result3.fillCoffeeBean(100);
    // console.log(result4);

}
