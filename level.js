class Level {
  constructor(level) {
    this.level = level;
    this.totalRow = 1 + level * 2;
    this.emojiWidth = 80 - level * 5;
    this.emojis = [];
    this.randomRow = Math.floor(random(this.totalRow));
    this.randomColumn = Math.floor(random(this.totalRow));
    for (let row = 0; row < this.totalRow; row++) {
      this.emojis.push([]);
      for (let column = 0; column < this.totalRow; column++) {
        if (row === this.randomRow && column === this.randomColumn) {
          this.emojis[row].push(smilingFace);
        } else {
          const randomEmoji =
            emojiCollection[Math.floor(random(emojiCollection.length))];
          this.emojis[row].push(randomEmoji);
        }
      }
    }
  }
  run() {
    for (let row = 0; row < this.totalRow; row++) {
      for (let column = 0; column < this.totalRow; column++) {
        const x =
          centerX -
          (this.emojiWidth * (1 + 3 * (Math.floor(this.totalRow / 2) - row))) /
            2;
        const y =
          centerY -
          (this.emojiWidth *
            (1 + 3 * (Math.floor(this.totalRow / 2) - column))) /
            2;
        imageMode(CORNER);
        image(this.emojis[row][column], x, y, this.emojiWidth, this.emojiWidth);
      }
    }
    this.smileFaceListener();
  }
  smileFaceListener() {
    const x =
      centerX -
      (this.emojiWidth *
        (1 + 3 * (Math.floor(this.totalRow / 2) - this.randomRow))) /
        2;
    const y =
      centerY -
      (this.emojiWidth *
        (1 + 3 * (Math.floor(this.totalRow / 2) - this.randomColumn))) /
        2;
    if (
      currentTouch.x > x &&
      currentTouch.x < x + this.emojiWidth &&
      currentTouch.y > y &&
      currentTouch.y < y + this.emojiWidth
    ) {
      console.log("this.level + 1 :", this.level + 1);
      game.setStage(this.level + 2);
    }
  }
}
