{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) throw new Error("널입니다");
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) throw new Error("널입니다");
    return arg;
  }

  //generic
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) throw new Error("널입니다");
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  console.log(boal);
}

//사용하는사람이 어떤타입인지 결정할수 있고 타입을 보장할수 있다.
//T를 전달하면 T를 리턴
