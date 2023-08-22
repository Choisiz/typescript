{
  interface Person {
    name: string;
    age: number;
    industry: "commmon";
  }

  interface Dev {
    name: string;
    age: string;
    industry: "tech";
  }

  function greet(someone: Person | Dev) {
    switch (someone.industry) {
      case "commmon":
        console.log(someone.age.toFixed(2));
        break;
      case "tech":
        console.log(someone.age.split(""));
    }
  }
}
