class Coins {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.circle(this.x, this.y, 30, 30, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 30, 30);
  }
}
