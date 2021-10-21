
{
    //커피정보
    type coffeeData = {
        shots: number
        milk:boolean,
        coffeeBeans: number
    }
    
    //public, private, protected
    class CoffeeMake { 
        //초기값
        //private를 작성하면 외부에서 보이지 않으며 변경 불가
        private static BEAN_GRAM_COFFEE:number = 5; 
        private coffeeBeans:number =0;

        //디폴트 
        //constructor에 private를 붙이면
        //new 클래스를 생성하지 못한다. 대신
        //생성자의 cnstrucotr이 아닌 다른 static한 함수를 사용해야 한다.
        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        //B사 커피머신
        static makeMachine(coffeeBeans:number):coffeeData{
            const abc= new CoffeeMake(coffeeBeans);
            const good =abc.makeCoffee(1,coffeeBeans);
            return good
        }
        fillCoffeeBean(beans:number){
            if(beans <0 ){
                throw new Error("beans가 0보다 커야합니다");
            }
            return this.coffeeBeans+=beans;

        }
    
        //커피만들기
        makeCoffee(shots:number,coffeeBeans:number):coffeeData{
            if(coffeeBeans < shots* CoffeeMake.BEAN_GRAM_COFFEE){
                throw new Error("커피재료가 부족합니다.");
            }
            coffeeBeans -= shots* CoffeeMake.BEAN_GRAM_COFFEE;
            return {
                shots: shots,
                milk: false,
                coffeeBeans:coffeeBeans
            }
        }
    }

    
    const result = CoffeeMake.makeMachine(100);
    console.log("default 커피머신으로 커피만들기: ",result)
    const result2=CoffeeMake.makeMachine(50);
    console.log("B사 커피머신 초기화: ",result2)
    const result3 = new CoffeeMake(100);
    const result4= result3.fillCoffeeBean(100);
    console.log(result4);

    class Uswe {
        get fullName():string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge=4;
        get age():number { //두다
            return this.internalAge;
        }

        set age(num:number) { //놓다
            this.internalAge =num;
        }
        constructor(public firstName:string, private lastName:string){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    const user = new Uswe('c','ky');
    user.age=20;
    console.log(user.age);
    console.log(user.fullName);
    user.firstName="gg";
    console.log(user.fullName);
}
