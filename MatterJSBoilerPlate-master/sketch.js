
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,600,10);
	ground = new Ground(400,680,800,10);

	leftside = new Dustbin(560,620,20,100)
	bottomside = new Dustbin(610,660,100,10)
	topside = new Dustbin(670,620,20,100)

	



	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  paper.display()
  ground.display()

  leftside.display()
  bottomside.display()
  topside.display() 
  

  
  drawSprites();
 
}
 


