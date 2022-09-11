var astranoutImg,bgImg,bg1Img;
var bg2Img,shipImg,enemy_shipImg,space_foodImg;
var waterImg,stoneImg;
var spaceship,astranout,enemy_spaceship,food,water;

function preload(){ // load images, animations and sound files
  astranoutImg = loadImage("./assets/astranout.jpg");
  bgImg = loadImage("./assets/bg.jpg");
  bg1Img = loadImage("./assets/bg1.jpg");
  bg2Img = loadImage("./assets/bg2.jpg");
  shipImg = loadImage("./assets/spaceShip.png");
  enemy_shipImg = loadImage("./assets/enemy_ship.png");
  space_foodImg = loadImage("./assets/space_food.png");
  waterImg = loadImage("./assets/water.png");
  stoneImg = loadImage("./assets/stones.png");
}

function setup(){ // create sprites, add animation and images, executes its st. only once
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2);
  bg.addImage("bg2",bg2Img);
  bg.scale = 1.2;
  bg.velocityY = 4.5;

  food = createSprite(width/2,height-100,50,50);
  food.addImage("food",space_foodImg);
  food.scale = 0.3;

  water = createSprite(width/2,height-100,50,50);
  water.addImage("water",waterImg);
  water.scale = 0.3;
  
  spaceship = createSprite(width/2,height-100,50,50);
  spaceship.addImage("spaceship",shipImg);
  spaceship.scale = 0.3;

  enemy_spaceship = createSprite(width/2-300,height-400,50,50);
  enemy_spaceship.addImage("enemy_spaceship",enemy_shipImg);
  enemy_spaceship.scale = 0.3;
}

function draw(){
  background("black");

  if (bg.y >height-200)
  { 
    bg.y = 100 
  }

  drawSprites();
}

function windowResize()
{
  resizeCanvas(windowWidth,windowHeight);

}


