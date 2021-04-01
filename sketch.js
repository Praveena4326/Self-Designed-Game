/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;*/

var engine, world;
var boy;
var gameState = 0;
var timeMachine; 
var boyImg, timeMachineImg, manImg;
var bgImg, bgImg1;
var obstacle, obstacleImg;
var obstacleGroup;
var bullet, bulletImg, gun, gunImg;
var bulletGroup;
var girl, girlImg;

function preload(){
boyImg = loadAnimation("images/WalkingBoy.gif");
timeMachineImg = loadImage("images/timeMachine.jpg");
bgImg = loadImage("images/livingRoom.jpg");
bgImg1 = loadImage("images/Lab.jpg");
manImg = loadAnimation("images/Man.png");
girlImg = loadImage("images/Girl.png");
obstacleImg = loadImage("images/Obstacle.png");
bulletImg = loadImage("images/bullet.png");
gunImg = loadImage("images/Gun.png");
 

}
function setup(){
    var canvas = createCanvas(1340,600);
   // engine = Engine.create();
   // world = engine.world;
     boy = createSprite(100,300,10,20);
    // boy.addAnimation("boy",boyImg);
     boy.shapeColor = "Red"
     console.log(boy);

    timeMachine = createSprite(760,300,20,10);
    timeMachine.addImage(timeMachineImg);
    timeMachine.scale = 0.2
    timeMachine.shapeColor = "Orange"

    girl = createSprite(500,350,10,10);
    girl.addImage(girlImg)
    girl.shapeColor = "Pink"
    girl.visible = false;

    gun = createSprite(120,250,10,10);
    gun.addImage(gunImg)
    gun.shapeColor = "yellow"
    gun.visible = false;

    //boy.addAnimation("man",manImg);
   // timeMachine.addImage();
   obstacleGroup = new Group();
    bulletGroup = new Group();
}

function draw(){
    background(0);
    //Engine.update(engine);

    if(gameState===0){
        push()
        textSize(34.89);
        textFont("Great Vibes");
        fill("Aqua")
        text("You have come across a Time Machine. You always dreamt of travelling through the Time Machine to explore the future!",02,50)
       pop()
       
       textSize(35);
       textFont("Great Vibes");
       fill("Pink")

        text("To get started with your journey press the Right Arrow key",300,110)

        timeMachine.visible = true;

        if(keyDown("UP_ARROW")){
            boy.x = boy.x + 50;
            gameState = 1;

        }
    }
    
    if(gameState===1){

        timeMachine.visible = true;

        if(keyDown(RIGHT_ARROW)){
            boy.x = boy.x+50;
        }

        if(keyDown(LEFT_ARROW)){
            boy.x =  boy.x-50;
        }

        textSize(35);
        textFont("Great Vibes");
        fill("Blue")
        text("Control the boy with help of arrow keys ", 430,50);
        text("and make it touch the Time Machine to enjoy the adventure of future",300,100);

      if(boy.x-timeMachine.x<boy.width/2+timeMachine.width/2 &&
            timeMachine.x - boy.x< boy.width/2 +timeMachine.width/2 &&
            boy.y-timeMachine.y< boy.height/2+timeMachine.height/2 &&
            timeMachine.y-boy.y<boy.height/2+timeMachine.height/2){
                gameState = 2;
               
            }

    }
    
   


    if(gameState===2){
        //boy.changeAnimation("man",manImg);
        
        girl.visible = true;

        boy.x = 100;
        boy.y = 250;

        timeMachine.visible = true;
        
        push()
        textSize(31);
        textFont("Great Vibes");
        fill("aqua blue")

        text("Cross the girl to reach your destination (Time Machine) after certain adventures to get back to the past.",200,50)
        text("You have 10 bullets to shoot the hurdles on your way. After the 10 bullets are over, you have to face the challenges on your own",70,100)
        text("When you touch any of the hurdles you'll have to go through them from the beginning",250,150)
        pop()
        
        textSize(35);
        textFont("Algerian");
        fill("Yellow ")
        text("Press 'S' to start your journey",310,200);
        

       
    if(keyDown("S")){
        gameState = 3;
    }
}

    if(gameState === 3){
    spawnObstacles();
    girl.visible = false;

    gun.visible = true;

    bullets();

   /* if(bullet.x-obstacle.x<bullet.width/2+obstacle.width/2 &&
        obstacle.x - bullet.x< bullet.width/2 +obstacle.width/2 &&
        bullet.y-obstacle.y< bullet.height/2+obstacle.height/2 &&
        obstacle.y-bullet.y<bullet.height/2+obstacle.height/2)
        {
            obstacle.destroy();
        }*/
}
    drawSprites();
}

function spawnObstacles() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
       obstacle = createSprite(1360,250,40,10);
      obstacle.y = Math.round(random(220,250));
     // obstacle.addImage(obstacleImg);
      obstacle.scale = 0.5;
      obstacle.velocityX = -3;
      
       //assign lifetime to the variable
       obstacle.lifetime = 700;
      
      //adjust the depth
      obstacle.depth = boy.depth;
      boy.depth = boy.depth + 1;
      
      //add each cloud to the group
      obstacleGroup.add(obstacle);
    }
    
  }

  function bullets(){
      if(frameCount%80 === 0){
      bullet = createSprite(140,250,10,10);
      bullet.shapeColor = "brown"
          bullet.velocityX = 5;
   
      //bullet.lifetime = 600;
      }
  }














  /*text("After he reached the future he was suprised to meet his future daughter! He had a great conversation with her and visited a few places with the help of her. After a day, he wanted to get back to his world (The Past)",200,150);
  text("But unfortunately the Time Machine was broken and he was really upset about it");
  text("At that moment his future daughter who understood his situation started to guide him to a new machine")*/