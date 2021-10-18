{
    //JavaScript
    const MAX_NUMBER =6;
    const MONDAY =0;
    const TUESDAY=1;
    const ENUM = Object.freeze({"MONDAY":0,"TUESDAY":1});
    const dayOfToday = ENUM.MONDAY; //결과: 0
    
    //Typescript
    enum Days {
        Monday,  //0
        Tuesday  //1
    }
    let day: Days.Monday; //결과: 0

    //문제 
    day =10; //10을 할당해도 에러가 발생하지 않는다. 타입이 보장x
    //해결
    //Union을 쓰자
    type dayUnion = "Monday" | "Tuesday";
    let day2: dayUnion = 'Monday';
    day2 ='Monday' //👍
    //day2='Friday' //❌
}