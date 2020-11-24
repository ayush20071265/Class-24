class Box {
    
  constructor(x,y,width,height) {
    var options = {
        restitution : 0.5,
        density : 1,
        friction: 1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
  }

    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("Red");
      strokeWeight(4);
      stroke("White");
      rect(0,0,this.width,this.height);
      pop();
    }

}
