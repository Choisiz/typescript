{
    // &와 유사 즉 할당된 인자가 하나라도 빠지면 안됨
    type Student = {
        name: string,
        age: number 
    }

    type Worker = {
        pay: number,
        job: () => void;
    }

    function internWork(person: Student & Worker){
        console.log(person.name);
    }
    
    internWork({
        name:"홍길동",
        age:18,
        pay:15000,
        job: ()=> {}
        
    })
}