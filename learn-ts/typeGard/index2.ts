{
  //구별된 유니언 타입

  interface Person {
    name: string;
    age: string;
    industry: "commmon";
  }

  interface Dev {
    name: string;
    age: string;
    industry: "tech";
  }

  function greet(someone: Person | Dev) {
    if (someone.industry === "commmon") {
      console.log("person");
    }
  }
}
