interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();
const either2: Either<string, string> = new SimpleEither("4", "5");
const either3: Either<string, number> = new SimpleEither("4", 5);
const either4: Either<boolean, number> = new SimpleEither(true, 5);
const either5 = new SimpleEither({ name: "messi" }, 5);
//TODO 마지막에 사용자가 타입을 결정한다 즉 유연하다
