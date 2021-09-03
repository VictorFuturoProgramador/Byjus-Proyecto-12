var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  //loadAnimation of the boy
 
}

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path 
//add image for the path
//Make the track a moving background by giving velocity Y.
path.scale=1.2;

//create a boy sprite
//add animation for the boy
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
