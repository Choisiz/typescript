type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; //?result: boolean Type
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>; //?result string Type
type T1 = TypeName<"hello">; //?result string Type
type T2 = TypeName<() => void>; //?result function Type
