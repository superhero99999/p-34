class Ball {
  constructor(x, y,r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, r/2, options);
    this.image=loadImage("Superhero-01.png")
   this.r=r
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4)
    stroke("Red")
    fill(255);
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
};
