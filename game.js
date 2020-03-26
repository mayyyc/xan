class Game {
  constructor() {
    this.stage = 0;
  }
  reset() {
    this.stage = 0;
  }
  getStage() {
    return this.stage;
  }
  setStage(stage) {
    if (stage === 0) {
      start = new Start();
      level5 = new Level(5);
      level4 = new Level(4);
      level3 = new Level(3);
      level2 = new Level(2);
      level1 = new Level(1);
      finish = new Finish();
    }
    this.stage = stage;
    this.state = undefined;
  }
}
