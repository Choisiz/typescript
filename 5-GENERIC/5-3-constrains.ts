interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time입니다");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time입니다");
  }
  workPartTime() {}
}
//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 별로
function pay(employee: Employee) {
  employee.pay();
  let a = "5";
  console.log("wwww");
  return a;
}
const messi = new FullTimeEmployee();
const ronaldo = new PartTimeEmployee();
//----
//messi.workFullTime(); //? 결과: ""
//messi.pay(); //?결과: full time입니다
//ronaldo.workPartTime(); //? 결과: ""
//ronaldo.pay(); //?결과: part time입니다
//----
const messiAfterPay = pay(messi); //?결과: full time입니다

//const ronaldoAfterPay = pay(ronaldo);
