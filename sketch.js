
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,Ball
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Ball=new ball(800,400,70,70)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 
  Ball.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   ball.y=ball.y+100
		
	   
	 }
	}

