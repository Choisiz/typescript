{
  interface Hero {
    name: string;
    nick: string;
  }
  interface Person {
    name: string;
    age: number;
  }

  interface Dev {
    name: string;
    age: string;
    skill: string;
  }

  /*
  function greet(someone: Hero | Person | Dev) {
    if ("age" in someone) {
      console.log("나이는?", someone.age);
    } 
  }
  */
  function greet(someone: Hero | Person | Dev) {
    if (isPerson(someone)) {
      console.log("나이는?", someone.age);
    }
  }

  function isPerson(someone: Hero | Person | Dev): someone is Person {
    return typeof (someone as Person).age === "number";
  } //someone변수를 Person타입으로 타입단언한후에 그 객체의 age 속성의 타입이 "number"와 일치하는지를 검사
}
