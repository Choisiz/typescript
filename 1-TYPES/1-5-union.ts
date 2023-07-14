{
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("up");

  type SuccessState = {
    res: {
      body: string;
    };
  };
  type FailState = {
    reason: {
      body: string;
    };
  };

  type loginState = SuccessState | FailState;
  function login(id: string, pw: string): loginState {
    return {
      res: {
        body: "성공",
      },
      reason: {
        body: "실패",
      },
    };
  }

  function printLoginState(state: loginState) {
    if ("res" in state) {
      console.log(`😀 ${state.res.body}`);
    } else {
      console.log(`😭 ${state.reason.body}`);
    }
  }
}
