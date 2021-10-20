
{
    //커피정보
    type coffeeData = {
        shots: number
        milk:boolean,
        coffeeBeans: number
    }

    class CoffeeMake { 
        //오브젝트 마다 새로 만들어줘야하는 데이터가 있다면 멤버변수로
        //그게 아니라 클래스에서는 변하지 않고 공유되는 데이터면 static
        //static로 선언한 변수는 하위에 this 표기x, 해당class 이름작성해야됨
        //초기값
        static BEAN_GRAM_COFFEE:number = 5; //변하지 않는값에 static, class level
        coffeeBeans:number =0; // instance level

        //디폴트 커피머신
        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        //B사 커피머신
         static makeMachine(coffeeBeans:number){
            const abc= new CoffeeMake(coffeeBeans);
            const good =abc.makeCoffee(1,coffeeBeans);
            return good
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

    const result = new CoffeeMake(100);
    //결과: CoffeeMake { coffeeBeans: 100 } => 초기값을 가져옴
    console.log("default 커피머신 초기화: ",result)
    //결과: { shots: 1, milk: false, coffeeBeans: 95 } =>
    //      CoffeeMake안의 메소드 makeCoffee를 가져와 정의된 값을 리턴
    console.log("default 커피머신으로 커피만들기: ",result.makeCoffee(1,100)); 

    const result2=CoffeeMake.makeMachine(50);
    //결과: { shots: 1, milk: false, coffeeBeans: 45 }
    console.log("B사 커피머신 초기화: ",result2)
}

//this
//1. this를 선언하면 해당 변수는 클래스내에 멤버변수를 가르킨다.
//   예를들어 a =5 일때 어떠한 연산을 해서 a=4가 되도, this.a라고 선언하면
//   그것은 변한값이 아니라 a=5인 멤버변수를 가르킨다.

//static
//1. static는 변하지 않는 값일떄 사용
//2. static를 선언한 변수는 클래스내에서 this는 사용못하며, 해당변수 앞에 클래스명.
//3. static를 선언하면 new 객체를 생성하지 않아도 사용아 가능하다.(없으면 new 필수)
