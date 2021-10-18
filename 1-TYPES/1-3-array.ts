{
//배열선언 두가지 방법
const fruits: string[]=['🍓','🍇','🍍']
const fruits2: Array<string>=['🍓','🍇','🍍']
const numbers: number[]=[1,2,3,4];
const numbers2: Array<number> =[1,2,3,4]

function printArray(fruits: readonly string[]){
    //Shadowed Variable
    //전달된 인자를 함수내에서 로컬변수로 덮어쓰우는것x
    //fruits=['w','g'];
    fruits[0]="w" //readonly로 안됨
    console.log(fruits);
}

printArray(fruits);
//readonly: 변경할수 없는 배열

//tuple: 서로다른 데이터 타입 담을수 있는 배열
//권장하지 않는다.
//이유: 데이터를 접근시 인덱스처럼 접근하는것은 가독성떨어짐
//대신에 object, class 형태로 접근하면 좀더 좋음
//interface, type alias, class 로 사용 추천
//useState에서 쓰는것과 비슷함
//여기 들어가보면 리턴타입이 튜플임

let student :[string,number];
student =['name',123];
student[0] //name
student[1] //123
const [name,age]=student;
}