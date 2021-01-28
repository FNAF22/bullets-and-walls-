var car , wall ;
var speed , weight;



function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
   weight = random(400,1500)

   thickness = random(22,83)

  bullet=createSprite(50, 200, 50, 5);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColour = "light blue ";
  wall.shapeColour = "dark brown"
}

function draw() {
  thickness = random(22,83)
background("black")
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  
if(damage>10)
{

  stroke(255,0,0);
  fill(255,0,0);
  textSize(50);
  wall.shapeColor="lightblue";
  text("Rejected",500,200);
}



if(damage<10)
{
  textSize(50);
  stroke(0,255,0);
  fill(0,255,0);
  wall.shapeColor="pink";
  
  text("Approved",500,200);
}

}


drawSprites();

}


function hasCollided(lbullet, lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}