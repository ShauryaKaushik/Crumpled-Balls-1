class PaperBall{
    constructor(x, y,radius) {
        var options = {
            "isStatic" : false,
            'restitution':0,
            'friction':0.5,
            'density':1.5
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);     
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        strokeWeight(5);  
        fill("blue");
        ellipse(0,0,30,30);
        pop();
      }
}
