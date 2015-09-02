export default class HomeController {
  constructor(randomNames) {
    this.name = 'Sweet home';
    this.randomNames = randomNames;
  }

  changeName() {
    this.name = this.randomNames.getName();
  }
}
