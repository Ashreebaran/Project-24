
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var box, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = createSprite(100, 600, 20,20);
	paper.shapeColor = color(255,255,255);
	paper.velocityY = 3;

	box = createSprite(590, 640, 200, 20);
	box.shapeColor = color(0,45,0)
	box2 = createSprite(700, 600, 20, 100);
	box2.shapeColor = color(0,45,0)
	box3 = createSprite(500, 600, 20, 100);
	box3.shapeColor = color(0,45,0)

	ground = new Ground(400,680,800,60);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	}
}



