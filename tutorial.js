class Tutorial {
  constructor() {}
  run() {
    textFont(headingFont);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(light);
    textSize(60);
    text("Which is Xan's", centerX, centerY - 600);
    text("favourite emoji?", centerX, centerY - 500);
    imageMode(CORNER);
    image(smilingFace, centerX - 100, centerY - 200, 80, 80);
    image(shylySmilingFace, centerX + 20, centerY - 200, 80, 80);
    image(confusedFace, centerX - 100, centerY - 80, 80, 80);
    image(tearsOfJoy, centerX + 20, centerY - 80, 80, 80);
    if (
      currentTouch.x > centerX - 100 &&
      currentTouch.x < centerX - 20 &&
      currentTouch.y > centerY - 200 &&
      currentTouch.y < centerY - 120
    ) {
      game.setStage(2);
    }
  }
}
