class PaperBall{
    constructor(x, y,radius) {
        var options = {
            "isStatic" : true,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(100,100,30,30);
        pop();
      }
}
