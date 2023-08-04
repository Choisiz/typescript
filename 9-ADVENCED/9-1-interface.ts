{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  interface PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  //obj ⭐️
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, //TODO 중복된 인터페이스가 있는경우 다 구현해줘야 한다.
  };
  //class ✨
  class pos1 implements PositionType {
    x: number;
    y: number;
  }
  class pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  //extends 🌕
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number }; //초창기에는 x

  //! 오직 인터페이스만 중복 머지 가능하다
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; //?string
  type NumberType = number; //새로안타입생성
  type Direction = "left" | "right"; //유니언타입
}

//규격을 정의하고, 그것을 통해서 구현된다면 = 인터페이스 사용
//데이터를 담고 묘사를 한다 = 타입을 사용
