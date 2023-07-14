{
  //type
  const uniform_number: number = 10;
  const player_name: string = "messi";
  const Ambipedal_players: boolean = false;
  let age: number | undefined;
  let family: string | null;
  let score: unknown = 0; //💩
  score = 2;
  score = "2:1";
  let etc: any = "bestPlayer"; //💩
  etc = 10;
  etc = false;
  const postion1 = (): void => {
    let mid = "mid";
    return; //리턴값이 없을때
  };
  function postion2(): void {
    let striker = "striker";
    return;
  }
  const throwError1 = (message: string): never => {
    throw new Error(message);
    while (true) {} //리턴을 사용하지 못함
  };
  function throwError2(message: string): never {
    throw new Error(message);
    while (true) {}
  }
  //object(원시타입제외 오든 오브젝트 할당가능)💩
  let obj: object;
  obj = [];
  obj = {};
  const accept1 = (obj: object) => {
    return obj;
  };
  function accept2(obj: Object) {
    return obj;
  }
  accept1({ name: "messi", age: "30" });
}
