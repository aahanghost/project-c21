
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300,600);

	var options = {
		isStatic:false,
		restitution = 0.3,
		friction = 0,
		density = 1.2
	}

	var ground_options = {
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	
	ground =new Ground(650,570,1300,30,ground_options);
	wall = new Ground(900,560,10,50);
	wall1 = new Ground(1000,560,10,50);

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,20,options)

	Engine.run(engine);
    rectMode(CENTER);
	ellipse(RADIUS);

}


function draw() {

  ellipse(ball.position.x,ball.position.y,20)
	ground.display();
	wall.display();
	wall1.display();

  background(0);
  
  drawSprites();
 
}



