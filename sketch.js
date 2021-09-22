var box 
function setup() {
  createCanvas(400,400);
  box=createSprite(210,213,50,50)
}

function draw() 
{
  background(200);
if(keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x+2
}
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-2
}


drawSprites()
}




