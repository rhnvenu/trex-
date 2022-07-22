var edges
var ground,ground_image
var invisibleground
var trex ,trex_running;
var test
var cloud,cloudImage
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
cloudImage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  edges=createEdgeSprites()
  //create a trex sprite
 trex=createSprite(50,170,20,20)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 ground=createSprite(200,180,400,10)
 ground.velocityX=-4
 ground.addImage(ground_image)
 invisibleground=createSprite(200,190,400,10)
 invisibleground.visible=false
}

function draw(){
  background(0)
  test=Math.round(random(1,100))
  console.log(test)
  if(keyDown("space")&&trex.y>=130){
trex.velocityY=-10
  }
  if(ground.x<30){
ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(invisibleground)
  spawnClouds()
drawSprites();
}
function spawnClouds(){
  if(frameCount%60===0){
cloud=createSprite(600,30,20,10)
cloud.velocityX=-4
cloud.y=Math.round(random(10,50))
cloud.addImage(cloudImage)
cloud.scale=0.8
trex.depth=cloud.depth
trex.depth=trex.depth+1
}
}