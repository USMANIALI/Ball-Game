var canvas;        
var music;
var ball,still1,still2,still3,still4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
still1=createSprite(700,595,120,20);
still1.shapeColor="red";

still2=createSprite(500,595,120,20);
still2.shapeColor="green";

still3=createSprite(300,595,120,20);
still3.shapeColor="blue";

still4=createSprite(100,595,120,20);
still4.shapeColor="black";
    //create box sprite and give velocity
    ball=createSprite(400,200,40,40);
    ball.velocityX=7;
    ball.velocityY=6;

    ball.shapeColor="white";
    
}

function draw() {
    background(rgb(169,169,169));
    
    
    //create edgeSprite
edges=createEdgeSprites();

drawSprites();
    //add condition to check if box touching surface and make it box
    
     
     ball.bounceOff(edges)

      if(isTouching(ball,still1)){
          ball.shapeColor="red"
          ball.bounceOff(still1)
          music.play();
      }

      
      if(isTouching(ball,still2)){
          ball.shapeColor="green"
          ball.velocityX=0;
          ball.velocityY=0;
          music.stop();
      }

 if(isTouching(ball,still3)){
          ball.shapeColor="blue"
          ball.bounceOff(still3)
          
      }

      if(isTouching(ball,still4)){
        ball.shapeColor="black"
        ball.bounceOff(still4)
        
    }


}


