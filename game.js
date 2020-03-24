class Game {
  constructor() {
    this.stage = 0;
    this.state = undefined;
  }
  getStage() {
    return this.stage;
  }
  reset() {
    this.stage = 0;
    this.state = undefined;
  }
  setStage(stage) {
    this.stage = stage;
    console.log("this.stage :", this.stage);
  }
}
