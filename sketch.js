
//Actividad Inicial TREX Etapa 4

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage, cloudsGroup;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;                                                

var PLAY = 1;
var END = 0;
var gameState = PLAY


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");                  
  obstacle2 = loadImage("obstacle2.png");                  
  obstacle3 = loadImage("obstacle3.png");                   
  obstacle4 = loadImage("obstacle4.png");                   
  obstacle5 = loadImage("obstacle5.png");                   
  obstacle6 = loadImage("obstacle6.png");                   
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" , trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);

  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
    
  //Emmet, checa en tu consola el ejercicio de Concatenar Strings (cadena de caractéres) y valores númericos
  //console.log("Hola" + " " + "Emmet"  +  "Tu dedicación merece un " + 100);                      
  
  //console.log(trex.y);                                    
  score = 0;
  obstaclesGroup = new Group();
  cloudsGroup = new Group();  
}

function draw() {
  background(140);
  fill("white");                                          
  text("Puntuación: "+ score, 500,50);                    
  score = score + Math.round(frameCount/60);    
  


  if( gameState === PLAY){
    ground.velocityX = -4;

  }
  else if( gameSatate === END) {
    ground.velocityX = 0;

  }

  
  console.log("Hola Emmet" + " " + "Éste es un ejercicio de concatenación de Strigs(cadena de caractéres) " + "Valores Numéricos "+ 10);
  console.log("Emmet " + "te dedicación merece un" + " " + 100);

                                 
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -13;
  }
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  trex.collide(invisibleGround);
  //aparece las nubes
  spawnClouds();
  //Aparece obstáculos en el suelo
  spawnObstacles();                                  
  drawSprites();
}

function spawnObstacles(){                           
 if (frameCount % 60 === 0){    
   var obstacle = createSprite(600,165,10,40);        
   obstacle.shapeColor= "green";                                         
   obstacle.velocityX = -4;                     

   
    //Genera obstáculos al azar 
    var rand = Math.round(random(1,6));              
    switch(rand) {                                   
      case 1: obstacle.addImage(obstacle1);          
              break; 
      case 2: obstacle.addImage(obstacle2);          
              break; 
      case 3: obstacle.addImage(obstacle3);          
              break;
      case 4: obstacle.addImage(obstacle4);          
              break;
      case 5: obstacle.addImage(obstacle5);          
              break;
      case 6: obstacle.addImage(obstacle6);          
              break;
      default: break;
    }
    //asigna escala y ciclo de vida al obstáculo           
    obstacle.scale = 0.4;                            
    obstacle.lifetime = 300;                         
 
    obstaclesGroup.add(obstacle)
 
  }
}

function spawnClouds() {
  //escribe el código aquí para aparecer las nubes
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.6;
    cloud.velocityX = -3;
    
     //asigna ciclo de vida a la variable                 
    cloud.lifetime = 220;                   
    
    //ajusta la profundidad
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    cloudsGroup.add(cloud);
  }
}


