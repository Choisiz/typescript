/**
 * Let's make a calculator 🧮
 */

type commend='add'|'substract'|'multiply'|'divide'|'remainder';
function calculate(name:commend, x:number, y:number):number{
    if(name=="add"){
        return x+y;
    }else if(name=="substract"){
        return x-y;
    }else if(name =="multiply"){
        return x*y;
    }else if(name=="divide"){
        return x/y;
    }else if(name=="remainder"){
        return x%y;
    }else{
        throw Error("error");
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
