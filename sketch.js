let currentTouch;
let centerX;
let centerY;
let game;
let start;
let level;
let finish;

let darker;
let dark;
let green;
let grass;
let light;
let yellow;
let error;
const fr = 24;

let smilingFace;
let shylySmilingFace;
let coldSweat;
let confusedFace;
let sadFace;
let stopwatch;
let tearsOfJoy;
let tree;
let dog;
let person;
let trophy;
let emojiCollection = [];

//matter.js setup
const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let ground;
let wallLeft;
let wallRight;

function preload() {
  stopwatch = loadImage("assets/stopwatch.png");
  sadFace = loadImage("assets/sad_face.png");
  smilingFace = loadImage("assets/smiling_face.png");
  shylySmilingFace = loadImage("assets/shyly_smiling_face.png");
  coldSweat = loadImage("assets/cold_sweat.png");
  confusedFace = loadImage("assets/confused_face.png");
  tearsOfJoy = loadImage("assets/tears_of_joy.png");
  sendMsg = loadImage("assets/send_msg.png");
  tree = loadImage("assets/tree.png");
  dog = loadImage("assets/dog.png");
  person = loadImage("assets/person.png");
  trophy = loadImage("assets/trophy.png");
  headingFont = loadFont("assets/sigmar_one.ttf");
  contextFont = loadFont("assets/open_sans.ttf");
  emojiCollection = [
    shylySmilingFace,
    coldSweat,
    confusedFace,
    tearsOfJoy,
    sadFace
  ];
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
  error = color("#8C2A3C");
  currentTouch = new Touch();
  start = new Start();
  level5 = new Level(5);
  level4 = new Level(4);
  level3 = new Level(3);
  level2 = new Level(2);
  level1 = new Level(1);
  game = new Game();
  finish = new Finish();
  frameRate(fr);
  createCanvas(windowWidth, windowHeight);
  finish.setup();
}

function draw() {
  background(grass);
  // level1.hint();
  // level5.timer();
  // level5.run();
  // finish.run();
  switch (game.getStage()) {
    case 0:
      start.run();
      break;
    case 1:
      level1.run();
      break;
    case 2:
      level2.run();
      break;
    case 3:
      level3.run();
      break;
    case 4:
      level4.run();
      break;
    case 5:
      level5.run();
      break;
  }
}

function touchEnded() {
  currentTouch.set(mouseX, mouseY);
  setTimeout(() => currentTouch.reset(), 50);
}
