let currentTouch;
let centerX;
let centerY;
let game;
let start;
let tutorial;
let level;
let finish;

let darker;
let dark;
let green;
let grass;
let light;
let yellow;
const fr = 24;

let smilingFace;
let shylySmilingFace;
let coldSweat;
let confusedFace;
let tearsOfJoy;
let tree;
let trophy;
let emojiCollection = [];

function preload() {
  smilingFace = loadImage("assets/smiling_face.png");
  shylySmilingFace = loadImage("assets/shyly_smiling_face.png");
  coldSweat = loadImage("assets/cold_sweat.png");
  confusedFace = loadImage("assets/confused_face.png");
  tearsOfJoy = loadImage("assets/tears_of_joy.png");
  sendMsg = loadImage("assets/send_msg.png");
  tree = loadImage("assets/tree.png");
  trophy = loadImage("assets/trophy.png");
  headingFont = loadFont("assets/sigmar_one.ttf");
  contextFont = loadFont("assets/open_sans.ttf");
  emojiCollection = [shylySmilingFace, coldSweat, confusedFace, tearsOfJoy];
}

function setup() {
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  darker = color("#3B3C41");
  dark = color("#475659");
  green = color("#358C3B");
  yellow = color("#FFFFB4");
  grass = color("#769062");
  light = color("#F3F1F2");
  currentTouch = new Touch();
  start = new Start();
  tutorial = new Tutorial();
  level5 = new Level(5);
  level4 = new Level(4);
  level3 = new Level(3);
  level2 = new Level(2);
  level1 = new Level(1);
  game = new Game();
  finish = new Finish();
  frameRate(fr);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(grass);
  finish.run();
  // level.run();
  // switch (game.getStage()) {
  //   case 0:
  //     start.run();
  //     break;
  //   case 1:
  //     tutorial.run();
  //     break;
  //   case 2:
  //     level1.run();
  //     break;
  //   case 3:
  //     level2.run();
  //     break;
  //   case 4:
  //     level3.run();
  //     break;
  //   case 5:
  //     level4.run();
  //     break;
  //   case 6:
  //     level5.run();
  //     break;
  //   case 7:
  //     finish.run();
  //     break;
  // }
}

function touchEnded() {
  currentTouch.set(mouseX, mouseY);
  setTimeout(() => currentTouch.reset(), 50);
}
