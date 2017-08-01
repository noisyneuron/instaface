function Mouth(w, h) {
  this.width = w;
  this.height = h;
  this.topPoints = [];
  this.bottomPoints = [];
  this.topBasePoints = [];
  this.bottomBasePoints = [];
  this.animPoint = 0.5;
  this.time = 0;
  this.area;

  this.randomize = function() {

    var l,r,t1,t2,b1,b2, tb1, tb2, bb1, bb2;

    l = createVector(0, floor(random(0.45*this.height, 0.55*this.height)));
    r = createVector(this.width, floor(random(0.45*this.height, 0.55*this.height)));

    t1 = createVector(floor(random(-0.2*this.width, 0.5*this.width)),
                     floor(random(-.2*this.height, .6*this.height)));
    t2 = createVector(floor(random(0.5*this.width, 1.1*this.width)),
                     floor(random(-.2*this.height, .6*this.height)));
    
    

    b1 = createVector(floor(random(-0.1*this.width, 0.5*this.width)),
                     floor(random(0.4*this.height, 1.2*this.height)));
    b2 = createVector(floor(random(0.5*this.width, 1.2*this.width)),
                     floor(random(0.4*this.height, 1.2*this.height)));
    
    
    this.topPoints.push(l);
    this.topPoints.push(t1);
    this.topPoints.push(t2);
    this.topPoints.push(r);

    tb1 = createVector(0.5*this.width, .5*this.height);
    tb2 = createVector(0.5*this.width, .5*this.height);
    this.topBasePoints.push(l);
    this.topBasePoints.push(tb1);
    this.topBasePoints.push(tb2);
    this.topBasePoints.push(r);

    this.bottomPoints.push(l);
    this.bottomPoints.push(b1);
    this.bottomPoints.push(b2);
    this.bottomPoints.push(r);

    bb1 = createVector(0.5*this.width, .5*this.height);
    bb2 = createVector(0.5*this.width, .5*this.height);
    this.bottomBasePoints.push(l);
    this.bottomBasePoints.push(bb1);
    this.bottomBasePoints.push(bb2);
    this.bottomBasePoints.push(r);

    console.log(t1);
    console.log(t2);
    console.log(b1);
    console.log(b2);

    console.log(p5.Vector.dist(t1,t2) * p5.Vector.dist(b1,b2));
  }



  this.update = function() {
    this.animPoint = map(sin(this.time), -1, 1, 0, 1);
    this.time += radians(12);
  }

  this.render = function() {
    // stroke(200,0,0);
    // strokeWeight(4);
    fill(0);
    var t=[], b=[];
    for(var i=0; i<this.topPoints.length; i++) {
      t.push(p5.Vector.lerp(this.topPoints[i], this.topBasePoints[i], this.animPoint));
      b.push(p5.Vector.lerp(this.bottomPoints[i], this.bottomBasePoints[i], this.animPoint));
    }
    beginShape();
      vertex(t[0].x, t[0].y);
      bezierVertex(t[1].x, t[1].y, 
                   t[2].x, t[2].y,
                   t[3].x, t[3].y);
    endShape();
    beginShape();
      vertex(b[0].x, b[0].y);
      bezierVertex(b[1].x, b[1].y, 
                   b[2].x, b[2].y,
                   b[3].x, b[3].y);
    endShape();

    noStroke();
    fill(0);
  }
}