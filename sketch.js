let currentTouch;
let centerX;
let centerY;
let game;
let start;

let darker;
let dark;
let green;
let grass;
let light;
let yellow;
const fr = 24;

function preload() {
  smilingFace = loadImage("assets/smiling_face.png");
  shylySmilingFace = loadImage("assets/shyly_smiling_face.png");
  coldSweat = loadImage("assets/cold_sweat.png");
  smilingFace = loadImage("assets/confused_face.png");
  smilingFace = loadImage("assets/smiling_face.png");
  sendMsg = loadImage("assets/send_msg.png");
  headingFont = loadFont("assets/sigmar_one.ttf");
  contextFont = loadFont("assets/open_sans.ttf");
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
  game = new Game();
  frameRate(fr);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(grass);
  switch (game.getStage()) {
    case 0:
      start.run();
      break;
    case 1:
      ellipse(10, 10, 10, 10);
      break;
  }
}

function touchEnded() {
  currentTouch.set(mouseX, mouseY);
  setTimeout(() => currentTouch.reset(), 500);
}
