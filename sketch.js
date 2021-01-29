const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var pogo;
var rock1, rock2, rock3, rock4, rock5;

function preload() {
  bg = loadImage("images/bg2.jpg");
  bg.scale = 3;
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(500, 500);

  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(width / 2, 490, 500, 15, ground_options);
  World.add(world, ground);

  pogo = new Player(100, 450, 50);

  // rock1 = new Rock(100, 400, 50, 50);
  rock2 = new Rock(200, 350, 50, 50);
  rock3 = new Rock(250, 350, 50, 50);
  rock4 = new Rock(300, 350, 50, 50);
  rock5 = new Rock(350, 350, 50, 50);
}

function draw() {
  Engine.update(engine);

  background(bg);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 500, 15);

  // rock1.display();
  rock2.display();
  rock3.display();
  rock4.display();
  rock5.display();

  pogo.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(pogo.body, pogo.body.position, { x: 50, y: -100 });
  }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(pogo.body, pogo.body.position, {
      x: -100,
      y: -50,
    });
  }

  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(pogo.body, pogo.body.position, {
      x: 100,
      y: -50,
    });
  }
}
