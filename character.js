function Character(w, h) {
  this.width = w;
  this.height = h;
  this.face;
  this.hair;
  this.eyes;
  this.mouth;
  this.hairline;
  this.eyesPos;
  this.mouthPos;

  this.init = function() {
    this.hairline = floor(random(.2*this.height, .5*this.height));
    this.hairline = this.hairline - (this.hairline % 10);

    this.hair = new Hair(this.width, this.hairline, 10);
    this.face = new Face(this.width, this.height - this.hairline);
    this.eyes = new Eyes(0.6*this.width, 0.15*this.face.height);
    this.mouth = new Mouth(0.2*this.width, 0.2*this.width);

    var ex, ey;
    ex = floor(random(.1*this.width, .3*this.width));
    ey = floor(random(.05*this.height, .1*this.height));
    this.eyesPos = createVector(ex,ey);

    var mx, my;
    mx = floor(random(0.35*this.face.width, 0.45*this.face.width));
    my = floor(random(0.4*this.face.height, 0.5*this.face.height));
    this.mouthPos = createVector(mx,my);

    this.hair.randomize();
    this.face.randomize();
    this.eyes.randomize();
    this.mouth.randomize();
  }

  this.update = function() {
    this.mouth.update();
    this.eyes.update();
  }

  this.render = function() {
    this.hair.render();
    push();
      translate(0, this.hairline);
      this.face.render();
      push();
        translate(this.eyesPos.x, this.eyesPos.y);
        this.eyes.render();
      pop();
      push();
        translate(this.mouthPos.x, this.mouthPos.y);
        this.mouth.render();
      pop();
    pop();
    
  }
}