const failedCopy = [
  "Come on!",
  "You can do it!",
  "I believe in you!",
  "U r almost there!",
  "So close!"
];
const succeededCopy = ["Well done!", "Good job!", "Yay!", "Groovy!"];

class Level {
  constructor(level) {
    this.level = level;
    this.lastLevel = 6;
    this.totalRow = 1 + level * 2;
    this.emojiWidth = 80 - level * 5;
    this.emojis = [];
    this.randomRow = Math.floor(random(this.totalRow));
    this.randomColumn = Math.floor(random(this.totalRow));
    this.time = level === 1 ? fr * 5 : fr * 2 + level * 8;
    this.count = 0;
    this.succeeded = false;
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
    textFont(headingFont);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(light);
    textSize(60);
    const levelHeader =
      this.level === 1
        ? "Which is Xan's"
        : this.level === this.lastLevel
        ? "Level Evil"
        : `Level ${this.level - 1}`;
    text(levelHeader, centerX, 200);
    this.level === 1 && text("favourite emoji?", centerX, 260);
    if (this.level !== 1) this.timer();
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

    if (this.succeeded) {
      // show succeed hint
      this.hint();
      console.log("succeed");
      // proceed to next level
      if (this.level < this.lastLevel) {
        setTimeout(() => {
          game.setStage(this.level + 1);
          this.count = 0;
          this.succeeded = false;
        }, 3000);
      }
    } else if (this.count < this.time) {
      // listen to click smile face when there's still time and hasn't succeeded
      this.smileFaceListener();
      this.count += 1;
    } else {
      // show failed hint
      this.hint();
      console.log("failed");
      // return to start screen
      setTimeout(() => {
        game.setStage(0);
        this.count = 0;
        this.succeeded = false;
      }, 3000);
    }
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
      this.succeeded = true;
    }
  }
  timer() {
    let warning = this.count / this.time > 3 / 4 ? true : false;
    strokeWeight(5);
    stroke(warning ? error : light);
    noFill();
    rect(100, 100, windowWidth - 200, 10, 5);
    stroke(warning ? error : light);
    fill(warning ? error : light);
    rect(100, 100, (windowWidth - 200) * (1 - this.count / this.time), 10, 5);
    imageMode(CENTER);
    image(
      stopwatch,
      100 + (windowWidth - 200) * (1 - this.count / this.time),
      100,
      50,
      50
    );
  }
  hint() {
    if (this.level === this.lastLevel && this.succeeded) {
      finish.run();
    } else {
      //container
      strokeWeight(5);
      stroke(light);
      fill(dark);
      rect(
        centerX - 350,
        centerY - 300,
        700,
        !this.succeeded || this.level === 1 ? 380 : 300,
        50
      );
      //emoji
      imageMode(CENTER);
      image(
        this.succeeded ? smilingFace : confusedFace,
        centerX,
        centerY - 200,
        100,
        100
      );
      //text
      textFont(headingFont);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(light);
      textSize(60);
      if (this.level === 1) {
        text(
          this.succeeded ? "Great! Now" : "You're not Xan!",
          centerX,
          centerY - 100
        );
        text(
          this.succeeded ? "we're serious!" : "Who are you!",
          centerX,
          centerY - 20
        );
      } else {
        text(
          this.succeeded
            ? succeededCopy[this.level - 2]
            : failedCopy[this.level - 2],
          centerX,
          centerY - 100
        );
        !this.succeeded && text("Try again!", centerX, centerY - 20);
      }
    }
  }
}
