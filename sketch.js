var b1,b2,b3,b4,b5;
var start;
var road1,road2,road3,road4,road5,road6,road7,road8,road9,road10,road11,road12,road13,road14,road15,road16;
var road17,road18,road19,road20,road21,road22,road23,road24,road25,road26,road27,road28,road29,road30,road31
,road32;
var b1Image,b3Image,b4Image,b5Image;
var tree,treeImage;
var player,playerImage;
var bluemonster,monsterImage;
var invb1;
var bullet,bulletGroup,bulletImage;
var monsterGroup;
var playerShootImage;
var score=0;
var bullets=100;
var gameState="fight";
function preload(){
 b1Image = loadImage("b1.png");
 b3Image = loadImage("b3.png");
 b4Image = loadImage("b4.png");
 b5Image = loadImage("b5.png");
 treeImage = loadImage("tree.png");
 monsterImage = loadImage("monster.png");
 bulletImage = loadImage("bullet.png");
 playerImage = loadImage("shooter_2.png");
 playerShootImage = loadImage("shooter_3.png");

}

function setup() {
  createCanvas(1650,750);
  bulletGroup = new Group();
  monsterGroup = new Group();

  b1 = createSprite(150, 580,400,150);
  b1.shapeColor="yellow";
  b1.addImage(b1Image);
  b1.scale=0.6
  b3 = createSprite(1130,600,300,120);
  b3.addImage(b3Image);
  b3.scale=0.5
  b4 = createSprite(600,550,300,220);
  b4.addImage(b4Image);
  b4.scale=0.12;
  b5 = createSprite(300,350,100,200);
  b5.addImage(b5Image);
  b5.scale=0.65;
  tree = createSprite(920,200,100,200);
  tree.addImage(treeImage);
  tree.scale=0.25;

  invb1=createSprite(100,675,480,5);
  invb2 = createSprite(100,730,480,10);
  invb3 = createSprite(500,585,50,5);
  //invb4 = createSprite(360,565,50,280);
 


  start = createSprite(100,700,480,50);
  start.shapeColor="yellow"
  road1 = createSprite(360,585,50,280);
  road2 =createSprite(600,650,500,50);
  road3 = createSprite(280,470,200,50);
  road4 = createSprite(180,445,50,100);
  road5 = createSprite(115,370,180,50);
  road6 = createSprite(50,300,50,100);
  road7 = createSprite(875,675,50,100);
  road8 = createSprite(1100,730,500,50);
  road9 = createSprite(1370,600,50,320);
  road10 = createSprite(945,415,900,50);
  road11 = createSprite(480,315,50,250);
  road12 = createSprite(305,200,400,50);
  road13 = createSprite(80,150,50,150);
  road14 = createSprite(405,50,698,50);
  road15 = createSprite(200,150,50,100);
  road16 = createSprite(400,125,400,50);
  road17 = createSprite(600,200,50,200);
  road18 = createSprite(778,175,50,300);
  road19 = createSprite(905,300,300,50);
  road20 = createSprite(1050,175,50,300);
  road21 = createSprite(1180,50,220,50);
  road22 = createSprite(1300,175,50,300);
  road23 = createSprite(1250,150,100,50);
  road24 = createSprite(1220,200,50,150);
  road25 = createSprite(1370,350,190,50);
  road26 = createSprite(1440,200,50,300);
  road27 = createSprite(1550,75,200,50);
  road28 = createSprite(1550,150,200,50);
  road29 = createSprite(1625,370,50,400);
  road30 = createSprite(1600,400,200,50);
  road13 = createSprite(1520,550,50,350);
  road32 = createSprite(1600,700,210,50);
  road32.shapeColor="red";

  player = createSprite(50,700,20,20);
  player.shapeColor="orange";
  player.addImage(playerImage);
  player.scale=0.09;
  player.debug=true
  player.setCollider("circle",0,0,50);


  
}

function draw() {
  background(255,255,255); 
  player.collide(invb1);
  player.collide(invb2);
  player.collide(invb3);
 // player.collide(invb4);

  invb1.visible=false;
  invb2.visible=false;

  if(gameState==="fight"){
    if(bulletGroup.isTouching(monsterGroup)){
      for(var i=0; i<monsterGroup.length;i++){
        if(monsterGroup[i].isTouching(bulletGroup)){
          monsterGroup[i].destroy();
        }
      }
    }

    if(keyIsDown(87)||keyIsDown(119) ){
      player.y -=5;
    }
    if (keyIsDown(83)||keyIsDown(115)){
      player.y +=5;
    }
    if(keyIsDown(65)||keyIsDown(97)){
      player.x-=5;
    }
    if(keyIsDown(68)||keyIsDown(100)){
      player.x +=5;
    }
    /*if(keyIsDown(32)){
      player.addImage(playerShootImage);
      spawnBullet();
    }*/
    if(keyWentDown("space")){
      player.addImage(playerShootImage);
      spawnBullet();
    }
    else if(keyWentUp("space")){
      player.addImage(playerImage)
    }
  
  
    if(player.isTouching(monsterGroup)){
    
     gameState==="lost";
    }

    monster();
    drawSprites();

  }
  else if(gameState==="lost"){
  textSize(100);
  fill("red");
  text("game over",800,325,200,200);
  monsterGroup.destroyEach();
  player.destroy();

}
   
  
}

function monster(){
if(frameCount%50===0){
bluemonster = createSprite(random(100,1600),random(100,700),20,20);
//bluemonster = createSprite(player.x-50,player.y,20,20);
bluemonster.shapeColor="blue"
bluemonster.velocityX=-2;
bluemonster.debug=true;
bluemonster.setCollider("circle",0,0,50);

bluemonster.addImage(monsterImage);
bluemonster.scale=0.1
bluemonster.lifeTime=1700;
monsterGroup.add(bluemonster);
}
}

function spawnBullet(){
  bullet = createSprite(player.x,player.y,10,10);
  bullet.velocityX =2;
  bulletGroup.add(bullet);
  bullet.addImage(bulletImage);
  bullet.scale=0.02;

}