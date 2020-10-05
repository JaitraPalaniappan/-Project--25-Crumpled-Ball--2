const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,dustbin;
var log1,log2,log3

function preload(){
    dustbinImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    ball = new Ball();

    dustbin= createSprite(964,520,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.45;

    log1 = new Dustbin(902,505,10,120);
    log2 = new Dustbin(962,565,130,10);
    log3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    ball.display();
    log1.display();
    log2.display();
    log3.display(); 
      
    drawSprites();
}

function keyPressed() {
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
	} 
}

