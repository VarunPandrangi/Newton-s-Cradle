class bobClass3 {
  constructor(x, y, radius) {
    var options = {
        isStatic: false,
        'restitution':1,
        'friction':0,
        'density':0.8
    }
   // this.width = width;
    //this.height = height;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, (this.radius)/2, options);
    
    World.add(world, this.body);
  }
  display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    //strokeWeight(4);
   // stroke("green");
    fill(255);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
};
