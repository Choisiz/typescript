//확신의 문법: 가능한 권장x
{
function jsStrFnc():any{
    return 2
};

const result = jsStrFnc(); //결과: 2

//사례
// return 2는 number인데 length라는 string메소드 사용가능 =>💩
console.log((result as String).length)
console.log((<string>result).length);

//사례2
//에러발생,종료 => ❌
const worong: any =5;
console.log((worong as Array<number>).push(1))

//사례3
function findNumber(): number[] | undefined {
    return undefined
}
const numbers = findNumber(); //결과: undefined
numbers!.push(2) //❌
}