const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine, world;

var paperObject;
var groundObject;

var dustbinside1, dustbinside2, dustbinside3;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	dustbinside3 = new dustbinClass(690, 340, 20, 100);
	dustbinside1 = new dustbinClass(510, 340, 20, 100);
	dustbinside2 = new dustbinClass(600, 380, 200, 20);

	paperObject = new paperClass(100, 100, 40);
	groundObject = new groundClass(370, width / 2, width, 20);

	Engine.run(engine);

}


function draw() {
	background(0);

	Engine.update(engine);

	paperObject.display();
	groundObject.display();
	dustbinside1.display();
	dustbinside2.display();
	dustbinside3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 50, y: - 80 });
	}
}