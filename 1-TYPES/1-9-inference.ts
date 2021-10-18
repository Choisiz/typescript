
//---타입추론---

//타입추론 let text: string => 💩
let text ='hello';

//타입추론 message: any
//number,string 아무거나 올수 있다 => 💩
function print(message){
    console.log(message);
}
print("hello")

//타입추론: x,y가 number이므로 합은 number =>💩
function add(x:number,y:number){
    return x+y;
}
const result =add(1,2);

//---타입선언----

//👍
function print2(message:string){
    console.log(message);
}
print2("hello")

//👍
function print3(message ='dafuult'){
    console.log(message);
}
print3("hello")

//👍
function add2(x:number,y:number):number{
    return x+y;
}
const result2 =add2(1,2);
