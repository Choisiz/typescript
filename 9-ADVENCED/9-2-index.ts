{
  const obj = {
    name: "messi",
  };
  obj.name; //?result: messi
  obj["name"]; //?result: messi

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //?result: type = string
  const text: Name = "messi"; //?result: messi

  type Gender = Animal["gender"]; //?result: male | female
  const text2: Gender = "female"; //?result: 둘중하나

  type Keys = keyof Animal; //?result: name, age, gender
  const text3: Keys = "age"; //?result: 세개중 하나

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const text4: Person = { name: "10", gender: "male" };
}
