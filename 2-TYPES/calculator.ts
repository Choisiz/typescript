{
  type list = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate2(name: list, x: number, y: number): number {
    if (name == "add") {
      return x + y;
    } else if (name == "substract") {
      return x - y;
    } else if (name == "multiply") {
      return x * y;
    } else if (name == "divide") {
      return x / y;
    } else if (name == "remainder") {
      return x % y;
    } else {
      throw Error("error");
    }
  }

  console.log(calculate2("add", 1, 3)); // 4
  console.log(calculate2("substract", 3, 1)); // 2
  console.log(calculate2("multiply", 4, 2)); // 8
  console.log(calculate2("divide", 4, 2)); // 2
  console.log(calculate2("remainder", 5, 2)); // 1
}
