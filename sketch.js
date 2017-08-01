var character;
var imgName = "c";

/* --------------sound stuff-------------- */
var pulse;
var filterEnv;
var attack1;
var decay1;
var pitch1;
var pitch2;
var len_time;
var target1;
var target2;
var target3;
var res;
var ffilter;

function genEnvs(){

  attack1 = random(100, 250)/1000.0;
  decay1 = random(100, 250)/1000.0;

  pitch1 = random(30, 800);
  pitch2 = random(30, 600);

  len_time = .5;//random(500, 1000)/1000.0;

  target1 = random(40, 1000);
  target2 = random(40, 1000);
  target3 = random(40, 1000);
  target4 = random(40, 1000);

  res = 2;//random(1, 5);

  width = random(0, 5)/10.0;

}

function play_voice(){
  pulse.stop();
  pulse.start();

  pulse.width(width);
  ffilter.res(res);
  filterEnv.setADSR(attack1, decay1);
  filterEnv.setRange(pitch1, pitch2);
  pulse.freq(pitch1);
  pulse.freq(pitch2, len_time/2, 0.1);
  filterEnv.ramp(ffilter.freq(), 0, target1, target2);
  filterEnv.ramp(ffilter.freq(), len_time/2, target3, 0);
}
/* -------------------------------------------------------- */

function setup() {
  var w = windowWidth > windowHeight ? windowHeight*.7 : windowWidth;
  createCanvas(w, windowHeight*0.9);
  noStroke();
  initChar();
  // frameRate(8);
  curveTightness(0);
  imgName += floor(random(100));
  /* sound stuff */
  filterEnv = new p5.Env();
  // pitchEnv =new p5.Env();

  ffilter = new p5.BandPass();
  ffilter.res(10);
  ffilter.freq(filterEnv);

  pulse = new p5.Pulse();
  pulse.amp(0.5);
  pulse.freq(230);

  pulse.disconnect();
  pulse.connect(ffilter);

  pulse.start();
  genEnvs();
  // play_voice();
  /* ------- */
}



function draw() {

  background(200);

  push();
    translate(100,.25*height);
    fill(80,80,80);
    // rect(0,0,300,600);
    character.render();
    character.update();
  pop();

  if(frameCount % 30 == 0) {
    play_voice();
  }
  

  if(frameCount >= 30 && frameCount <= 60) {
    // save(imgName + "-" + frameCount + '.jpg');
  }
}

function initChar() {
  character = new Character(width*0.4, height*.7);
  character.init();
  //char.getfreq
  //char.getpitch
}


