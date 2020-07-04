const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var ground;
var boxStick1,boxStick2;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    //var createSprite = new World

    var ground_options ={
        isStatic: true
    }

    paperBall = new PaperBall(70,190,20);
    
    boxStick1 = new Box(635,340,15,80);
    boxStick2 = new Box(520,340,15,80);


    ground = Bodies.rectangle(400,390,800,50,ground_options);
    World.add(world,ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,50);
    
    paperBall.display();    
    
    boxStick1.display();
    boxStick2.display();
    
}


