{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const AnimalOptional: Optional<Animal> = {
    name: "tiger",
    age: 20,
  };
  AnimalOptional.name = "cat"; //readonly x: 변경가능

  const ReadOnlyOptional: ReadOnly<Animal> = {
    name: "wolf",
    age: 20,
  };
  ReadOnlyOptional.name = "dog"; //readonly o: 변경불가능

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const nullOptional: Nullable<Video> = {
    title: null,
    author: "abc",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxyify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
