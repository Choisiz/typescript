{
  //js
  function jsAdd1(num, num2) {
    return num + num2;
  }
  //ts
  function jsAdd2(num1: number, num2: number) {
    return num1 + num2;
  }
  //js
  function jsFetch1(id) {
    //code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //ts
  function jsFetch2(id: string): Promise<number> {
    //code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //optinal parameter
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("c", "ky");
  printName("c");

  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("c", "ky");
  printName("c");

  //default parameter
  function printMessage(message: string = "default") {
    console.log(message);
  }
  printMessage();

  //rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4, 5));
}

//1-2-function
