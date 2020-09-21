var fixedRect, movingRect;
var box1,box2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  box1 = createSprite(600,300,50,100);
  box1.shapeColor = "blue";

  box2 = createSprite(600,650,50,100);
  box2.shapeColor = "pink";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1.velocityY = 6;
  box2.velocityY = -6;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(box1,box2);

  drawSprites();
}

