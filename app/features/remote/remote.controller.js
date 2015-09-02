export default class RemoteController {
  constructor(remote) {
    this.remote = remote;
    this.name = "toto";
  }

  getData() {
    if(!this.users) {
      this.loading = true;
      return this.remote.getUsers().then((response) => {
        this.loading = false;
        this.users = response.data;
      });
    }
      return this.users;
  }
}
