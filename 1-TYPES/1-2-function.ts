{
    //js
    function jsAdd (num,num2){
        return num+num2;
    }
    //ts
    function tsAdd(num:number,num2:number):number{
        return num+num2
    }
    //js
    function jsFetchNum(id){
        //code..
        //coee..
        return new Promise((resolve, reject)=> {
            resolve(100);
        });
    }
    //ts
    function tsFetchNum(id:string):Promise<number>{
        //code..
        //coee..
        return new Promise((resolve, reject)=> {
            resolve(100);
        });
    }

    //optinal parameter
    //인자가 없어도 가능, 해당타입이거나 undefined거나
    function printName(name:string, age?:number){
        console.log(name);
        console.log(age);
    }
    printName("WW",undefined);

    //default
    function printName2(name:string ='홍길동'){
        console.log(name)
    }
    printName2()
    //rest parameter
    function addNumber(...args:number[]):number{
        return args.reduce((a,b)=>a+b)
    }

    console.log(addNumber(1,2))
    console.log(addNumber(1,2,3,4));
}