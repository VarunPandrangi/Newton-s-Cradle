
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const render = Matter.render;

var roof,rope,rope2,rope3,rope4,rope5;
var bob, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, height/4, width/7, 20);

	bobDiameter = 40;
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;

	bobObject1 = new bobClass1(startBobPositionX - bobDiameter * 2, startBobPositionY, bobDiameter);

	bobObject2 = new bobClass2(startBobPositionX - bobDiameter, startBobPositionY, bobDiameter);

	bobObject3 = new bobClass3(startBobPositionX, startBobPositionY, bobDiameter);

	bobObject4 = new bobClass4(startBobPositionX + bobDiameter, startBobPositionY, bobDiameter);

	bobObject5 = new bobClass5(startBobPositionX + bobDiameter * 2, startBobPositionY, bobDiameter);

	//var render = Render.create({
	//	element: document.body,
	//	engine: engine,
	//	options: {
	//		width: 700,
	//		height: 700,
		//	wireframes: false,
	//	}
	//})

	rope = new Rope(bobObject1.body, roof.body, -bobDiameter * 2, 0);
	rope2 = new Rope2(bobObject2.body, roof.body, -bobDiameter * 1, 0);
	rope3 = new Rope3(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope4(bobObject4.body, roof.body, +bobDiameter * 1, 0);
	rope5 = new Rope5(bobObject5.body, roof.body, +bobDiameter * 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y: 500});
	}
}

function drawLine() {
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyPosition.x)
}
