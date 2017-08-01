function Eyes(w, h) {
  this.width = w;
  this.height = h;
  this.outerSize;
  this.innerSize
  this.leftPos;
  this.rightPos;
  this.pupilPos1;
  this.pupilPos2;
  this.animPoint = 0.5;
  this.pause = 0;
  this.animDirection = 1;
  this.pauseLength = random(60,120);

  this.randomize = function() {
      this.outerSize = random(0.5*this.height, this.height);
      this.innerSize = random(0.35*this.outerSize, 0.8*this.outerSize);
      
      var lx, ly, rx, ry; 
      lx = random(0.5*this.outerSize, 0.4*this.width);
      ly = random(0.5*this.outerSize, this.height - 0.5*this.outerSize);
      rx = random(0.6*this.width, this.width-0.5*this.outerSize);
      ry = random(0.5*this.outerSize, this.height - 0.5*this.outerSize);

      this.leftPos = createVector(lx,ly);
      this.rightPos = createVector(rx,ry); 

      this.pupilPos1 = this.getRandomPupilPos();
      this.pupilPos2 = this.getRandomPupilPos();
  }

  this.getRandomPupilPos = function() {
    var ix = random(-0.5*(this.outerSize-this.innerSize), 0.5*(this.outerSize-this.innerSize));
    var iy = random(-0.5*(this.outerSize-this.innerSize), 0.5*(this.outerSize-this.innerSize));
    return createVector(ix,iy);
  }

  this.update = function() {
    if(this.animPoint == 1) {
      this.animDirection = -1;
      this.pause++;
      if(this.pause > this.pauseLength) {
        this.pupilPos1 = this.getRandomPupilPos(); 
        this.pause = 0; 
        this.pauseLength = random(60,120);
      }
    } else if(this.animPoint == 0) {
      this.animDirection = 1;
      this.pause++;
      if(this.pause > this.pauseLength) {
        this.pupilPos2 = this.getRandomPupilPos(); 
        this.pause = 0; 
        this.pauseLength = random(60,120);
      }
    }
    if(this.pause == 0) {
      this.animPoint += (0.1*this.animDirection);
      this.animPoint = constrain(this.animPoint, 0.0, 1.0);
    }
  }

  this.render = function() {
    // fill(150,200);
    // rect(0,0,this.width,this.height);
    var currPos = p5.Vector.lerp(this.pupilPos1, this.pupilPos2, this.animPoint);
    push();
      translate(this.leftPos.x, this.leftPos.y);
      fill(255);
      ellipse(0,0,this.outerSize, this.outerSize);
    pop();
    push();
      translate(this.rightPos.x, this.rightPos.y);
      fill(255);
      ellipse(0,0,this.outerSize, this.outerSize);
    pop();


    push();
      translate(this.leftPos.x, this.leftPos.y);
      push();
        translate(currPos.x, currPos.y);
        fill(0);
        ellipse(0,0,this.innerSize, this.innerSize);
      pop();
    pop();
    push();
      translate(this.rightPos.x, this.rightPos.y);
      push();
        translate(currPos.x, currPos.y);
        fill(0);
        ellipse(0,0,this.innerSize, this.innerSize);
      pop();
    pop();
  }
}