
{
//커피정보
type coffeeData = {
    shots: number
    milk:boolean,
    coffeeBean: number
}
//1커피당 소모되는 재료값
const BEAN_GRAM_COFFEE:number = 7;
//커피재료
let coffeeBean:number =0;

//커피만들기
const makeCoffee =(shots:number,coffeeBean:number):coffeeData=> {
    if(coffeeBean < shots*BEAN_GRAM_COFFEE){
        throw new Error("커피재료가 부족합니다.")
    }
    coffeeBean -= shots*BEAN_GRAM_COFFEE;
    return {
        shots: shots,
        milk: false,
        coffeeBean: coffeeBean
    }
}

coffeeBean += 3*BEAN_GRAM_COFFEE; //21
const result = makeCoffee(1,coffeeBean);
console.log(result);
}