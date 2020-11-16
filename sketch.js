var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START;
var backgroundImg;
var gunImg;
var scenery;
var gun;
var parrotImg,parrot, parrotGroup;
var bullet, bulletImg, bulletGroup;
var start, startImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  gunImg = loadImage("gun.png");
  parrotImg = loadAnimation("parrot.jpg","parrot1.jpg","parrot1.jpg");
  bulletImg = loadImage("bullet.jpg");
  startImg = loadImage("start.png")
}
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight-130);
  parrotGroup = new Group();
  bulletGroup = new Group();

  if(gameState === PLAY){
    //background image
    

    //gun
    gun = createSprite(displayWidth/2, displayHeight/1.5,displayWidth,displayHeight);
    gun.addImage(gunImg);
    gun.scale = 0.5;
  }

  //start button
  start = createSprite(displayWidth/2, displayHeight/1.5,displayWidth,displayHeight);
  start.addImage(startImg);
  start.scale = 0.5;
}

function draw() {
  //background(backgroundImg);
  //console.log(gameState);
  if(gameState === START){
    background("green");
    textSize(30);
    fill("white");
    text("Welcome to this game, below are the instructions", displayWidth/2, displayHeight/4);
    textSize(20);
    fill("grey");
    text("press 'S' to shoot", displayWidth/4, displayHeight/2)
    //Work of positioning

    if(mousePressedOver(start)){
      gameState = PLAY;
    }
  }
  else if(gameState === PLAY){
    scenery();
    if(keyDown("s")){
      bullets();
    }
    spawnParrots();
}
drawSprites();
}

function spawnParrots(){

  if(frameCount % 80 === 0){
    //parrot with animation
    parrot = createSprite(displayWidth/4,Math.round(random (displayHeight/5, displayHeight/2)), displayWidth, displayHeight);
    parrot.addAnimation("running", parrotImg);
    parrot.scale = 0.1;
    parrot.velocityX = 2;
    parrot.depth = scenery.depth;
    parrot.depth = parrot.depth + 1;
    parrot.lifetime = Math.round(displayWidth/2);
    parrotGroup.add(parrot);
  }

  
}

function bullets(){
  bullet = createSprite(displayWidth/2, displayHeight/1.8,displayWidth,displayHeight);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  bullet.velocityY = -4;
  bullet.lifetime = Math.round(displayWidth/4);


  bulletGroup.add(bullet);
}
function scenery(){
    scenery = createSprite(displayWidth/2,displayHeight/4,displayWidth,displayHeight-130);
    scenery.addImage(backgroundImg);
    scenery.scale = 0.375;
    scenery.x = displayWidth/2;
    scenery.velocityX = -4;
}