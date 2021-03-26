var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
function preload()

{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roofobject = new roof(width/2,height/4,width/7,20);
 bobdiameter = 40;
 bobpositionx = width/2;
 bobpsitiony =height/4+500;
bobObject1 = new bob(bobpositionx - bobdiameter*2,bobpsitiony,bobdiameter);
bobObject2 = new bob(bobpositionx - bobdiameter,bobpsitiony,bobdiameter);
bobObject3 = new bob(bobpositionx ,bobpsitiony,bobdiameter);
bobObject4 = new bob(bobpositionx + bobdiameter,bobpsitiony,bobdiameter);
bobObject5 = new bob(bobpositionx + bobdiameter*2,bobpsitiony,bobdiameter);
rope1 = new rope(bobObject1.body,roofobject.body,- bobdiameter*2,0);
rope2 = new rope(bobObject2.body,roofobject.body,- bobdiameter*1,0);
rope3 = new rope(bobObject3.body,roofobject.body, 0,0);
rope4 = new rope(bobObject4.body,roofobject.body, bobdiameter*1,0);
rope5 = new rope(bobObject5.body,roofobject.body, bobdiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofobject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites()

 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  
  }
}
function drawLine(Constraint){
  bobBodyPosition = contraint.bodyA.position;
  roofBodyPosition = constraint.bodyB.position;
  roofBodyOffset  =constraint.pointB;
  roofBodyX = roofBodyPosition.x+roofBodyOffset.x
  roofBodyy = roofBodyPosition.y+roofBodyOffset.y
  Line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyy)

}


