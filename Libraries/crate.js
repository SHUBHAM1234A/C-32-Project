class Crate{
  constructor(x,y,height,width,angle){
    var o={
      isStatic: false,
      restitution: 0.1,
      friction: 0.7,
      density: 2
    }
    this.image = loadImage("Assets/Images/crate.png");
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width
    this.body = Bodies.rectangle(x,y,height,width,o);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
