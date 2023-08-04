{
  class TimeOutError extends Error {}
  class OffLineError extends Error {}

  type SuccessState = {
    result: "success";
  };

  type failState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type ResultState = SuccessState | failState;
  class NetWorkClient {
    tryConnect(): ResultState {
      //throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetWorkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (e) {
        console.log("error");
      }
    }
  }

  const client = new NetWorkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}

/*
  try~catch에서 catch()는 any타입이기 때문에,
  어떠한 타입정보도 전달되지 않아서 instance of를  사용할 수 없다
  따라서 exception은 예상치못한곳에서 에러 발생할때 쓰는게 좋고,
  조금더 세부적인 에러결정을 할때는 error state를 사용하는것이 좋다.
  */
