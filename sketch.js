const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,399,1200,2);
  box1 = new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);

  box3 = new Box(700,220,70,70);
  box4 = new Box(900,220,70,70);
  box5 = new Box(800,125,70,70);
  
  pig1 = new Pig(800,350,50,50);
  pig2 = new Pig(800,200,50,50);

  bird = new Bird(100,100,50,50);

  log1 = new Log(800,240,300,PI/2);
  log2 = new Log(800,150,300,PI/2);
  log3 = new Log(750,120,150,PI/6);
  log4 = new Log(850,120,150,-PI/6);
}                     

function draw() {     

  background(0); 

  Engine.update(engine);  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  pig1.display();
  pig2.display();
  
  bird.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
}                                                                           