function Face(w, h) {
  Face.colors = ["#fae7d0", "#ffcc99", "#feb186", "#dfc183", "#ceab69", "#b98865", "#aa724b", "#935d37", "#7b4b2a", "#c8aca3", "#c0a183", "#c18e74", "#e8cda8", "#caa661", "#b58a3f", "#573719", "#483728"];
  
  this.width = w;
  this.height = h;
  this.points = [];
  this.color;

  this.randomize = function(){
    this.points.push(createVector(0,0));
    this.points.push(createVector(0,0));
    this.points.push(createVector(0,0));

    var x1, x2, y1, y2, x3, y3, mx, my;

    x1 = floor(random(-0.3*this.width, .1*this.width));
    y1 = floor(random(.2*this.height, .5*this.height));

    x2 = floor(random(.0*this.width, .2*this.width));
    y2 = floor(random(.5*this.height, .7*this.height));

    x3 = floor(random(.2*this.width, .4*this.width));
    y3 = floor(random(.7*this.height, .85*this.height));

    mx = floor(random(.4*this.width, .6*this.width));
    my = floor(random(.85*this.height, this.height));

    this.points.push(createVector(x1,y1));
    this.points.push(createVector(x2,y2));
    this.points.push(createVector(x3,y3));
    
    this.points.push(createVector(mx,my));

    this.points.push(createVector(mx+(mx-x3),y3));
    this.points.push(createVector(mx+(mx-x2),y2));
    this.points.push(createVector(mx+(mx-x1),y1));


    this.points.push(createVector(this.width,0));
    this.points.push(createVector(this.width,0));
    this.points.push(createVector(this.width,0));

    var hx, hy;
    hx = floor(random(.45*this.width, .55*this.width));
    hy = floor(random(-.1*this.height, -.15*this.height));
    this.points.push(createVector(hx,hy));

    this.points.push(createVector(0,0));
    // this.points.push(createVector(this.width,0));
    // this.points.push(createVector(this.width,0));
    this.color = color(floor(random(255)), floor(random(255)), floor(random(255)));
  }

  this.render = function() {
    beginShape();
      for(var i=0;i<this.points.length; i++) {
        fill(this.color);
        curveVertex(this.points[i].x, this.points[i].y);
      }
    endShape(CLOSE);
  }
}
