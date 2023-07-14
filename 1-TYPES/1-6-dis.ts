{
  type SuccessState = {
    result: "success";
    res: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    res: {
      body: string;
    };
  };

  type loginState = SuccessState | FailState;

  function printLoginState(state: loginState) {
    if (state.result === "success") {
      console.log(`😀 ${state.res.body}`);
    } else {
      console.log(`😭 ${state.res.body}`);
    }
  }

  const successState: loginState = {
    result: "success",
    res: {
      body: "로그인에 성공했습니다.",
    },
  };

  const failState: loginState = {
    result: "fail",
    res: {
      body: "로그인에 실패했습니다.",
    },
  };

  printLoginState(successState);
}
