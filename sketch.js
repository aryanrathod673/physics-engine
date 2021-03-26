const  Engine=Matter.Engine;
const  World=Matter.World;
const  Bodies=Matter.Bodies;

var engine,world,object;



function setup() {
  createCanvas(600,600);
  

 engine=Engine.create();

 world=engine.world;
var options={
  isStatic:true
}
 object=Bodies.rectangle(200,100,50,50,options);
  
World.add(world,object);


}

function draw() {
  background("red");  
 Engine.update(engine);
 rect(object.position.x,object.position.y,50,50);

}