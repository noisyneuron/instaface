function Hair(w, h, interval) {
  this.width = w;
  this.height = h;
  this.interval = interval;
  this.points = [];

  this.initPoints = function() {
    var angle = 0;
    while(angle<360) {
      var radius1 = random(0.2*this.width, 0.6*this.width);
      var radius2 = random(0.4*this.height, this.height);
      var r = random();
      var radius = r < 0.5 ? radius1 :radius2;
      var p = createVector(radius*sin(angle), radius*cos(angle));
      this.points.push(p);
      angle+=5;
    }
  }



  this.randomize = function(amount) {
    this.initPoints();
    
  }

  this.render = function() {
    fill(0);
    push()
      translate(0.5*this.width, this.height);
      beginShape();
      for(var i=0; i<this.points.length; i++) {
        vertex(this.points[i].x, this.points[i].y);
      }
      endShape(CLOSE);
    pop();
  }
}