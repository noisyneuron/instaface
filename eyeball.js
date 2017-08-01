function Eyeball(osize, isize) {
  this.outerPos;
  this.innerPos;
  this.outerSize= osize;
  this.innerSize= isize;

  this.randomize = function() {
    this.outerPos = createVector(0,0);
    var ix, iy;
    ix = random(-0.5*(this.outerSize-this.innerSize), 0.5*(this.outerSize-this.innerSize));
    iy = random(-0.5*(this.outerSize-this.innerSize), 0.5*(this.outerSize-this.innerSize));
    this.innerPos = createVector(ix,iy);
  }

  this.render = function() {
    push();
      translate(this.outerPos.x, this.outerPos.y);
      fill(255);
      ellipse(0,0, this.outerSize, this.outerSize);
    pop();

    push();
      translate(this.innerPos.x, this.innerPos.y);
      fill(0);
      ellipse(0,0, this.innerSize, this.innerSize);
    pop();

  }
}