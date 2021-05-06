
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperball;
var base,left,right;

var options={
	isStatic : false,
	restitution : 0.3,
	friction : 0.5,
	density : 1.2,
}

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 650, 1200, 20);

	paperball = new PaperBall(150, 350, 40);

	base = new Dustbin(900,635,200,15);
	left = new Dustbin(1008,592,15,100);
	right = new Dustbin(798,592,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paperball.display();

  base.display();
  left.display();
  right.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    paperball.fly();
}



