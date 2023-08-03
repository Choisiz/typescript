{
  class NetWorkClient {
    tryConnect(): void {
      throw new Error("no network");
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
