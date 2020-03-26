class Finish {
  constructor() {
    this.count = 0;
    this.smileFaces = [];
  }
  run() {
    //overlay
    noStroke();
    fill("rgba(59,69,65, 0.6)");
    rect(0, 0, windowWidth, windowHeight);

    //container
    strokeWeight(5);
    stroke(yellow);
    fill(dark);
    rect(centerX - 300, centerY - 300, 600, 400, 50);

    // trophy
    imageMode(CENTER);
    if (this.count > fr && this.count <= fr * 2) {
      image(
        trophy,
        centerX,
        centerY - 425 + (2 * fr - this.count),
        100 + this.count * 3,
        100 + this.count * 3
      );
    } else if (this.count > fr * 2) {
      image(trophy, centerX, centerY - 425, 244, 244);
    }
    //text
    textFont(headingFont);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(light);
    if (this.count < 2 * fr) {
      textSize(60);
      text("YAY!", centerX, centerY - 180);
      text("YOU DID IT!", centerX, centerY - 80);
    } else {
      textSize(60);
      text("YOU'RE", centerX, centerY - 220);
      text("ENOUGH!", centerX, centerY - 10);
      textSize(80);
      text("XAN", centerX, centerY - 120);
    }

    //smile faces
    if (this.count > fr * 3 && this.count < fr * 10 && this.count % 2 === 0)
      this.smileFaces.push(new SmileFace());
    Engine.update(engine);
    for (var i = 0; i < this.smileFaces.length; i++) {
      this.smileFaces[i].show();
    }
    this.count += 1;
  }
  setup() {
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
      isStatic: true
    };
    ground = Bodies.rectangle(
      windowWidth / 2,
      windowHeight,
      windowWidth,
      20,
      options
    );
    wallLeft = Bodies.rectangle(0, windowHeight / 2, 20, windowHeight, options);
    wallRight = Bodies.rectangle(
      windowWidth,
      windowHeight / 2,
      20,
      windowHeight,
      options
    );
    trophyBody = Bodies.rectangle(
      windowWidth / 2,
      centerY - 425,
      160,
      244,
      options
    );
    finishHintBody = Bodies.rectangle(
      windowWidth / 2,
      centerY - 100,
      550,
      400,
      options
    );

    World.add(world, [ground, wallLeft, wallRight, trophyBody, finishHintBody]);
    // World.add(world, wallLeft);
    // World.add(world, wallRight);
    // World.add(world, wallRight);
    // World.add(world, wallRight);
  }
}

class SmileFace {
  constructor() {
    var options = {
      // friction: 0.3,
      // restitution: 0.6
    };
    this.body = Bodies.circle(
      int(random(20, windowWidth - 20)),
      0,
      40,
      options
    );
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(smilingFace, 0, 0, 80, 80);

    pop();
  }
}
