var bgImage;
var iss, spaceCraft;
var issImage, spaceCraftImage, spaceCraftLeftImage, spaceCraftRightImage, spaceCraftBothImage;
var hasDocked = false;
var posX, posY;

function preload() {
  bgImage = loadImage("images/spacebg.jpg");
  issImage = loadImage("images/iss.png");
  spaceCraftImage = loadImage("images/spacecraft1.png");
  spaceCraftLeftImage = loadImage("images/spacecraft3.png");
  spaceCraftRightImage = loadImage("images/spacecraft4.png");
  spaceCraftBothImage = loadImage("images/spacecraft2.png");

}

function setup() {
  createCanvas(1000, 600);

  spaceCraft = createSprite(random(400, 600), 350);
  spaceCraft.addImage("spaceCraftImage", spaceCraftImage);
  spaceCraft.addImage("spaceCraftLeftImage", spaceCraftLeftImage);
  spaceCraft.addImage("spaceCraftRightImage", spaceCraftRightImage);
  spaceCraft.addImage("spaceCraftBothImage", spaceCraftBothImage);
  spaceCraft.scale = 0.2;

  iss = createSprite(500, 200);
  iss.addImage("iss", issImage);

  //iss.debug = true;
 // spaceCraft.debug = true;

  iss.setCollider("rectangle", 0, 0, 160, 120);
  spaceCraft.setCollider("rectangle", 0, 0, 160, 160);

}

function draw() {
  background(bgImage);

  if (keyDown(LEFT_ARROW)) {
    spaceCraft.x = spaceCraft.x - 2;
    spaceCraft.changeImage("spaceCraftLeftImage", spaceCraftLeftImage);
  }

  else if (keyDown(RIGHT_ARROW)) {
    spaceCraft.x = spaceCraft.x + 2;
    spaceCraft.changeImage("spaceCraftRightImage", spaceCraftRightImage);
  }

  else if (keyDown(DOWN_ARROW)) {
    spaceCraft.y = spaceCraft.y - 2;
    spaceCraft.changeImage("spaceCraftBothImage", spaceCraftBothImage);
  }

  else {
    spaceCraft.changeImage("spaceCraftImage", spaceCraftImage);
  }

  if (spaceCraft.isTouching(iss) && (spaceCraft.x > 430 && spaceCraft.x < 438) && (spaceCraft.y > 260 && spaceCraft.y < 275)) {
    hasDocked = true;
  }

  if (hasDocked === true) {

    textSize(20);
    fill("white");
    text("Docking Successful!", 400, 500);

    spaceCraft.x = 433
    spaceCraft.y = 275
    spaceCraft.velocityX = 0;
    spaceCraft.velocityY = 0;

    spaceCraft.changeImage("spaceCraftImage", spaceCraftImage);

  }

  drawSprites();
}