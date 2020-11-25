
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boder1,boder2,boder3;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(80,450);
	ground = new Ground(600,570,1200,20)
	boder1 = new Box(1000,550,200,20);
	boder2 = new Box(1090,490,20,100);
	boder3 = new Box(910,490,20,100);

	Engine.run(engine);
}


function draw() {
  
  background(0);
  paper.display();
  ground.display();
  boder1.display();
  boder2.display();
  boder3.display();

	

  drawSprites();
}
function keyPressed(){
if(keyCode===UP_ARROW)

Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85})

}


