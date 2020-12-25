var bk
var monkey , monkey_running
var banana ,bananaImg, obstacle, obstacleImg
var FoodGrp, obstacleGrp
var score,gameState = "play"
score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_8.png")
  
monkey_collided = loadAnimation("sprite_0.png")
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
  //bkImg = loadImage ("monkey.webp")
 
}



function setup() {

  ground = createSprite (200,390,800,20)
 // bk = createSprite (0,0,600,600)
//  bk.addImage (bkImg)
 
 ground.velocityX = -2
monkey = createSprite (80,350,20,20)
monkey .addAnimation ("running",monkey_running)
monkey.addAnimation("collided",monkey_collided)
monkey .scale = 0.08  
  foodGroup = new Group();
  obstacleGroup = new Group();
  monkey.debug = true
  //monkey.setColider (circle,0,0,40)
}  
  
  
  
  function draw (){  
  background ("green")
   fill("black")
    text  ("score = "+score,320,50)
   //console.log (ground.x)
    if(gameState === 'play'){
   
    if(ground.x < 0){
    ground.x = 200
    }
    
    if(keyDown("space")){
      monkey.velocityY = -12
    }
  monkey.velocityY = monkey.velocityY+.5
      
  if(monkey.isTouching(foodGroup)){
    score = score+5
    foodGroup.destroyEach ();
    switch(score){
      case 10:
      monkey.scale = 0.12
      break 
      case 20 :
      monkey.scale = 0.14
      break
      case 30 :
      monkey.scale = 0.16
      break
      case 40 :
      monkey.scale = 0.18
      break
      
    }
    
  }
  
    
  spawnfood ();
  spawnobstacle();

    if(monkey.isTouching(obstacleGroup)){
     monkey.scale = 0.08
      score = 0
    }
    }
      monkey.collide (ground)
    drawSprites ();
}
function  spawnfood(){
  if(frameCount % 100 === 0){
  banana = createSprite (500,200,20,20)
  banana.addImage (bananaImg)
  banana.scale = 0.1
  banana.lifetime = 500
  banana.depth = monkey.depth +1
  banana.velocityX = -3
  banana.x = Math. round (random(150,250))
  foodGroup.add (banana)
  }
}
function spawnobstacle (){
if(frameCount % 250 === 0){
obstacle = createSprite (200,350,20,20)
obstacle.addImage (obstacleImg)
obstacle .scale = 0.1
obstacle.lifetime = 500
obstacle .velocityX = -3
obstacleGroup.add(obstacle)
  obstacle.debug = true
}
}