//number
const num:number = 5;
//string
const str:string ="hello";
//boolean
const bol:boolean = true;
//undefined
let age: number | undefined;
//null;
let add: string | null;
//unknown(어떤것을 사용할지 모를때)💩
let notSure:unknown=0;
notSure="string"
notSure=true
//any(어떠한 것이든)💩
let anything:any=0;
anything="string";
anything=false;
//void(아무것도 return x), 보통 void는 생략 
function print(): void {
    let vo =5;
    return;
}
//never(절대 리턴x)
function throwError(message: string):never {
    throw new Error(message);
    while(true){}
}
//object(원시타입제외 오든 오브젝트 할당가능)💩
let obj: object; 
function accept(obj:Object){
    console.log(obj)
    return obj
}

accept({name:"hello"})