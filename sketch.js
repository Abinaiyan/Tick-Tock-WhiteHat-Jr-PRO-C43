var hr
var mn
var sc

function setup() {
  createCanvas(900,900);


  angleMode(DEGREES)
  ellipseMode(CENTER)
 

 
}

function draw() {
  background(0); 
  translate(450,450)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  scAngle= map(sc,0,60,0,360)
  mnAngle= map(mn,0,60,0,360)
  hrAngle= map(hr%12,0,12,0,360)

  
  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0, 0, 550, 550, 0, hrAngle);
  
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0, 0, 575, 575, 0, mnAngle);

  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0, 0, 600, 600, 0, scAngle);
  
  push();
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,250,0);
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();
  
  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
 
  
 
  drawSprites();
}